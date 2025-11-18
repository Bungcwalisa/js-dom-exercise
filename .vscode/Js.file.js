        const spellArea = document.getElementById("spellArea");
        const generateButton = document.getElementById("generateButton");
        const resetButton = document.getElementById("resetButton");
        const ingredientsList = document.querySelectorAll("#ingredientsList li");

       
        function randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        
        generateButton.addEventListener("click", () => {
            let countdown = 3;
            spellArea.textContent = countdown;

            const timer = setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    spellArea.textContent = countdown;
                } else {
                    clearInterval(timer);

                  
                    const randomIndex = Math.floor(Math.random() * ingredientsList.length);
                    const selectedIngredient = ingredientsList[randomIndex].textContent;

                   
                    spellArea.textContent = "✨ " + selectedIngredient + " ✨";

                    
                    spellArea.style.backgroundColor = randomColor();
                }
            }, 1000);
        });

      
        resetButton.addEventListener("click", () => {
            spellArea.textContent = "";
            spellArea.style.backgroundColor = "white";
        });
        