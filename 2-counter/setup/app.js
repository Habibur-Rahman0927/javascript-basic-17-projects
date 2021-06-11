//set initaial count 
let count = 0;
//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console.log(btns);
btns.forEach(function (btn) {
    // console.log(item);
    btn.addEventListener('click', function(e){
        //console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
           // console.log(count);
        }else if(styles.contains("increase")){
            count++;
        }else{
            // console.log(count);
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;

    });
});