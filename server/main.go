package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Gotem struct {
	Titty string
}

func handler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("index.html")
	if err != nil {
		fmt.Println(err)
	}
	Test := "test"
	if err := t.Execute(w, Test); err != nil {
		fmt.Println(err)
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
