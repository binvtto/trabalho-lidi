        let totalLiters = 0;
        const display = document.getElementById('liters');

        setInterval(() => {
            totalLiters += 0.05;
            display.innerText = totalLiters.toFixed(2);
        }, 1000);
