package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/getBids", getBids)
	err := http.ListenAndServe(":9001", nil)
	if err != nil {
		panic(err)
	}
}
func getBids(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Working")
	fmt.Fprintf(w, `{"cause":[{"name":"LovelyDay Inc."}]}`)
}
