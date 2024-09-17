package main

import (
	// "fmt"
	"html/template"
	"log"
	"net/http"
)

const (
	index = "index.html"
)

var templates = template.Must(template.ParseFiles(index))

type Gotem struct {
	Titty string
}

func handler(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, index, Gotem{Titty: "hihi"})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
