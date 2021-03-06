package main

import (
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "9001"
	}
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/getBids", getBids)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		panic(err)
	}
}
func getBids(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./organizations.json")
	// fmt.Fprintf(w, `{"cause":[{"name":"LovelyDay Inc."}]}`)
}
