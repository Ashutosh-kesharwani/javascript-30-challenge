// active:bg-blue-700 active:translate-x-6 active:duration-300
// const root = document.documentElement;

// document.querySelector("#themeToggle").addEventListener("click", () => {
//   root.classList.toggle("dark");
// });


const rootElem= document.documentElement; // html elem
toggleTheme();
function toggleTheme(){
    const toggleBtn= document.getElementById('themeToggle');
    toggleBtn.addEventListener('click',()=>{
        
        const toggleSpanElem= toggleBtn.children[1];
        console.log(toggleSpanElem);
         
        rootElem.classList.toggle('dark');

    })

    
}