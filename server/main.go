package main

import (
	"context"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os/exec"
	"strings"
	"time"
)

const (
	index = "index.html"
)

var templates = template.Must(template.ParseFiles(index))

type Gotem struct {
	Titty string
}

type Code struct {
	Input string `json:"input"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, index, Gotem{Titty: "hihi"})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func executeCode(code string) (string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	code = strings.ReplaceAll(code, "\n", " ")
	out, err := exec.CommandContext(ctx, "./executor", code).Output()
	if err != nil {
		return "Amazing code! It doens't work, perhaps my fault maybe yours...", err
	}
	return string(out), nil
}

func handlerExecute(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "You cheeky fellow!", http.StatusMethodNotAllowed)
		return
	}

	if err := r.ParseForm(); err != nil {
		http.Error(w, "Error parsing form", http.StatusBadRequest)
		return
	}

	response := fmt.Sprint(executeCode(r.FormValue("editor")))
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(response))
}

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", handler)
	http.HandleFunc("/execute", handlerExecute)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
