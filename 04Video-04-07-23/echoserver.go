package main

import (
	"bufio"
	"fmt"
	"net"
)

func reverseString(s string) string {
	// Convertir la cadena a un slice de bytes
	bytes := []byte(s)

	// Obtener la longitud de la cadena
	length := len(bytes)

	// Utilizar un bucle for para invertir los caracteres
	for i := 0; i < length/2; i++ {
		// Intercambiar los caracteres en posiciones opuestas
		bytes[i], bytes[length-i-1] = bytes[length-i-1], bytes[i]
	}

	// Convertir el slice de bytes de vuelta a una cadena
	return string(bytes)
}

func handle(cn net.Conn, i int) {
	defer cn.Close()
	r := bufio.NewReader(cn)
	for {
		if msg, err := r.ReadString('\n'); err == nil {
			
			fmt.Printf("Client %d said: %s", i, reverseString(msg))
			println("")
			if msg[0] == '.' {
				break
			}
			fmt.Fprintf(cn, "Re: %s", msg)
		} else {
			break
		}
	}
}

func main() {
	if ln, err := net.Listen("tcp", "localhost:8000"); err == nil {
		defer ln.Close()
		i := 0
		for {
			if cn, err := ln.Accept(); err == nil {
				go handle(cn, i)
				i++
			}
		}
	}
}