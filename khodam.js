function cariKhodam(nama) {
    nama = nama.toLowerCase();

    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash += nama.charCodeAt(i);
    }
    
    console.log(`Hash for ${nama}: ${hash}`); // Debugging output

    let index = hash % 21;
    console.log(`Index for ${nama}: ${index}`); // Debugging output

    const khodams = [
        "KAPAL KARAM",
        "LABA-LABA SUNDA",
        "AMBARUWO",
        "AMBATRON",
        "SKIBIDI TOILET",
        "OPM",
        "KUCING ISRIWIL",
        "KODOK ACUMALAKA",
        "SUPRA ICIKIWIR",
        "PLAYER BLUEARCHIVE",
        "PENYU MADURA",
        "HIU SUNDA",
        "MUSANG PAPUA",
        "KUKANG JAWA",
        "KELELAWAR MANADO",
        "PIRANHA BETAWI",
        "VARIO PALA GETER",
        "KUDA-KUDA PSHT",
        "SOSOK HITAM LEGAM",
        "KUCING ONDE MANDE",
        "TITIT NAGA"
    ];

    return khodams[index];
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('nameInput').value.trim();
    if (name === '') {
        const modal = document.getElementById('nameModal');
        modal.classList.add('show');
        modal.classList.remove('hide');
        modal.style.display = 'flex';
        return;
    }

    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('searchForm').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';

    let loadingBar = document.getElementById('loadingBar');
    loadingBar.style.width = '0%';

    let progress = 0;
    let interval = setInterval(function() {
        if (progress < 100) {
            progress += 2; // Adjust this value for smoother progress
            loadingBar.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust this value to match the total time of 5000ms

    setTimeout(function() {
        let result = cariKhodam(name);

        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('result').textContent = `Khodam ${name} adalah ${result}`;
        document.getElementById('backButton').style.display = 'block';
    }, 5000);
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('result').textContent = '';
    document.getElementById('searchForm').style.display = 'block';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('nameInput').value = '';
});

document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('nameModal');
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }, 300);
});
