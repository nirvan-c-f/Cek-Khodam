function cariKhodam(nama) {
    nama = nama.toLowerCase();

    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash += nama.charCodeAt(i);
    }

    let index = hash % 20;

    const khodams = [
        "Kapal Karam",
        "Laba-Laba Sunda",
        "Ambaruwo",
        "Ambatron",
        "Skibidi Toilet",
        "OPM",
        "Kucing Isriwil",
        "Kodok Acumalaka",
        "Supra Icikiwir",
        "Player BlueArchive",
        "Penyu Madura",
        "Hiu Sunda",
        "Musang Papua",
        "Kukang Jawa",
        "Kelelawar Manado",
        "Piranha Betawi",
        "Vario Pala Geter",
        "Kuda-Kuda PSHT",
        "Sosok Hitam Legam",
        "Kucing Onde Mande"
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
