let i = 0;
let j = 0;
let buttons = document.querySelectorAll(".ft");
const Animals = ['cat', 'dog', 'donkey', 'lion', 'tiger', 'buffalo', 'sheep', 'rabbit', 'giraffe', 'bear', 'zebra'];
const Fruits = ['orange', 'apple', 'guava', 'grape', 'banana', 'mango', 'kiwi', 'Pineapple', 'avocado', 'watermelon', 'pomegranate'];
const Birds = ['parrot', 'eagle', 'sparrow', 'peacock', 'pigeon', 'ostrich', 'owl', 'crow', 'swans', 'bat'];
var btt;
let array = [Animals, Fruits, Birds]
let selected
let values = document.getElementById("value")
let ne = "";
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        btt = button.value;
        localStorage.setItem('selectedCategory', btt);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    btt = localStorage.getItem('selectedCategory');
});

function get() {
    let got = array[btt]
    let text = document.getElementById("text")
    const index = Math.floor(Math.random() * got.length);
    selected = got[index]
    values.value = "*".repeat(selected.length)
    if (got == Animals)
        text.innerHTML = "<h1>Hint:- It is a "+selected.length +" Letter Animal</h1>"
    if (got == Fruits)
        text.innerHTML = "<h1>Hint:- It is a "+selected.length +" Letter Fruit</h1>"
    if(got == Birds)
        text.innerHTML = "<h1>Hint:- It is a "+selected.length +" Letter Bird</h1>"

}
function search(event) {
    const charCode = event.which || event.keyCode;
    const isAlphabeticKey = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

    if (!isAlphabeticKey) {
        return;
    }
    let a = document.getElementById("ans").value
    let d2 = document.getElementById('demo2')
    document.getElementById("demo").innerHTML = "";
    if (a.toLowerCase().charAt(i) === selected.charAt(i)) {
        ne = ne + selected.charAt(i)
        values.value = ne + "*".repeat(selected.length - i - 1);
        if (selected.length > a.length) {
            document.getElementById("demo").innerHTML = "";
            i++;
        }
        else {
            document.getElementById('text2').innerHTML = "<span style='color:Green',font-weight: 100;>You Won The Game!😀🏆🏆<span>";
        }

    } else {
        if (j < 4) {
            const stages = ['😥<br>', '/\\<br>', '|<br>', '/\\<br>'];
            d2.innerHTML += stages[j];
            document.getElementById("demo").innerHTML = "lost "+(j+1)+" out of 5";
            j++
        }
        else
            document.getElementById('text2').innerHTML = "<span style='color:red',font-weight: 100;>Lost The Game!😲 the correct word is " + selected
    }
    // function reloadContent() {
    //     fetch('url_of_content_to_reload') 
    //       .then(response => response.text())
    //       .then(data => {
    //         document.getElementById('contentToReload').innerHTML = data;
    //       })
    //       .catch(error => {
    //         console.error('Error fetching content:', error);
    //       });
         }
        

