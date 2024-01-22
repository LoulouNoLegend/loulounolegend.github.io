function getMapInfo() {
    var mapId = document.getElementById('the-id').value;
    var apiUrl = 'https://beatsaver.com/api/maps/id/' + mapId;
    let difficulties = [];
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('mapName').innerText = data.name;
            document.getElementById('author').innerText = 'by ' + data.uploader.name;
            document.getElementById('mapDuration').innerText = 'Duration: ' + data.metadata.duration + 's';
            document.getElementById('bpm').innerText = 'BPM: ' + data.metadata.bpm;
            
            // Go trough versions (data.versions)
            for(let i = 0; i < data.versions.length; i++) {
                let version = data.versions[i];

                // Go trough the diffs
                for(let j = 0; j < version.diffs.length; j++) {
                    let diff = version.diffs[j];

                    // if diff is a difficulty property, use it
                    if(diff.difficulty) {
                        difficulties.push(diff.difficulty);
                    }
                }
            }

            // Create a chain with the difficulties
            let difficultyText = difficulties.join(', ');

            document.getElementById('difficulties').innerText = 'Difficulties: ' + difficultyText;

            document.getElementById('upvotes').innerText = 'Upvotes: ' + data.stats.upvotes;
            document.getElementById('downvotes').innerText = 'Downvotes: ' + data.stats.downvotes;
        })
        .catch(error => console.error('Error:', error));
}