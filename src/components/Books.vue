<script setup>
import { onUpdated } from 'vue'
import { $booksStore, showBookDetails } from '../stores/BookStores/BookStores';
import { useStore } from '@nanostores/vue';


const booksArr = useStore($booksStore); 

onUpdated(() =>{
    console.log(booksArr.value.books)
})



</script>

<template>
    <div class="book-wrapper">
<div class="book-card" v-for="book in booksArr.books" @mouseenter="showBookDetails(book.id, true)" @mouseleave="showBookDetails(book.id, false)" >
    <img class="book-images" :src="book.coverimage" />
        <div>
            <p>
                {{ book.title }}
            </p>
            <p>
                {{ book.author }}
            </p>
            <p v-if="book.showDetails">
                {{ book.description }} YOOOOOO
            </p>
            <div v-if="book.available">In Stock</div>
            <div v-else>Unavailable</div>
        </div>
</div>
</div>

</template>

<style>
.book-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
}
.book-card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    margin: 1rem 2rem 0 2rem;
    border: solid 1px #cacfd3;
    border-radius: 8px;
}
.book-images{
    margin: 1rem 1rem 1rem 1rem;
    box-shadow: 10px 5px 5px #2d3e50;
    height: 250px;
    width: 250px;
}

</style>