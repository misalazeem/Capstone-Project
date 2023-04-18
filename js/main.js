document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#hamburger').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('inactive');
    document.querySelector('#mobile-menu').classList.add('active');
  });
  document.querySelector('#closebutton').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('active');
    document.querySelector('#mobile-menu').classList.add('inactive');
  });
  document.querySelector('#button1').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('active');
    document.querySelector('#mobile-menu').classList.add('inactive');
  });
  document.querySelector('#button2').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('active');
    document.querySelector('#mobile-menu').classList.add('inactive');
  });
  document.querySelector('#button3').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('active');
    document.querySelector('#mobile-menu').classList.add('inactive');
  });
  document.querySelector('#button4').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('active');
    document.querySelector('#mobile-menu').classList.add('inactive');
  });

  const performers = [
    {
      artistname: 'Taylor Swift',
      artistdescription: 'An American singer-songwriter who has become one of the best-selling artists of all time, known for her autobiographical lyrics, catchy pop hooks, and versatile musical style. Her albums "1989" and "Folklore" won multiple Grammy Awards and showcased her evolution as an artist.',
      imagelink: './images/taylor.png',
    },
    {
      artistname: 'The Weeknd',
      artistdescription: 'A Canadian singer-songwriter and producer known for his soulful voice, edgy lyrics, and eclectic musical style. His albums "Beauty Behind the Madness" and "Starboy" have won multiple Grammy Awards and established him as one of the leading voices in contemporary R&B and pop music.',
      imagelink: './images/weeknd.png',
    },
    {
      artistname: 'Adele',
      artistdescription: 'An English singer-songwriter known for her powerful vocals, emotive lyrics, and soulful melodies. With hits like "Hello" and "Someone Like You," she has become one of the best-selling artists of all time and has won multiple Grammy Awards for her albums "21" and "25."',
      imagelink: './images/adele.png',
    },
    {
      artistname: 'John Mayer',
      artistdescription: 'An American singer-songwriter and guitarist known for his soulful voice, virtuosic guitar playing, and wide-ranging musical influences. His albums "Continuum" and "Battle Studies" established him as a leading voice in contemporary blues and rock music, and he has collaborated with a diverse range of artists across multiple genres.',
      imagelink: './images/john mayer.png',
    },
  ];
  const featuredartists = document.getElementById('artists-container');
  for (let i = 0; i < performers.length; i += 1) {
    const performerdiv = `<div class="artist-card"><img class="artist-image" alt="${performers[i].artistname}" src="${performers[i].imagelink}"><div class="artist-content"><h3>${performers[i].artistname}</h3>${performers[i].artistdescription}</div></div>`;
    featuredartists.innerHTML += performerdiv;
  }
});