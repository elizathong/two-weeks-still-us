// ===== LETTERS CONTENT =====
const letters = [
`hey love,

i made this for you so that even when we’re apart, you’ll still feel me close 🤍
every time we’re away from each other, we somehow end up arguing 😬 and i think it’s just because we both miss each other more than we realise and we expect love differently from each other. so i hope these little letters can reassure you every day that i love you and that i’m here.

you’re probably already in thailand when you read this. if not, i hope you have a safe flight and enjoy your trip with your fam!

so… this is us, starting two weeks apart. we did it before, and i’m sure we’ll get through it again, one day at a time. if you miss me at any point during your day, you can open an envelope for the day 😊

i’ll still update you whenever i turn on my data, and i hope you’ll update me as much as you can too. i’ll be waiting for your messages/long messages when i finally turn my data back on :p they always make my day.

i love you.`,

`Today is my turn to fly! ✈️ to Nippon

Your first full day in Thailand! 

Since you're in thailand! Can i give you some mini challenges? hahaha dont worry if you dont want to do it, its just so i am in your mind all day 😏 hehe 

1st mini challenge for the day! Eat something spicy for me bahahaha take a vid if u want to show me heheheh 

if not maybe just take a picture of something delicious you had during the day :p

Other than that, go have some really yummy thai food 🤤

i love you`,

`were you tired cause i was in your mind the whole day yesterday? 😏

today's another day for a mini challenge! Snap 3 photos of anything blue and share why you chose them!

No flirting with girls in Thailand. I have spies. 🕵️‍♀️

just reminding you, ฉันรักคุณ (C̄hạn rạk khuṇ) apparently it's i love you in thai ❤️`,

`Not sure what time of the day you will open this but good morning or good afternoon or good evening or good night! haha

Wonder what you will be doing today, have you smoked weed with your parents? haha hope it was a good session smoking weed with ur parents and maybe with kay ti? haha

While I was writing day 4 for you, this was a song playing in the background. I think it's a good vibe song 🎶

You can listen to it if you want 🎧 

<iframe style="border-radius:12px"
src="https://open.spotify.com/embed/track/5Ai1xBdEWnP99udbOaWbc2"
width="100%" height="80"
frameBorder="0"
allowfullscreen=""
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>`,

`wahhh 5 days passed really quickly! It's time for you to fly home, hope you had a great time in Hat Yai 😄 Have a safe flight back!

haha sorry it's a short one today. i'm running out of ideas for the letters haha

i love you`,

`it's friyay! you just got back from thailand, hope you arent too tired and you have to work today huhu

hope work today isn't too blue, 1 day of work then the weekend!

if you are feeling blue, here is a little funny photo faces of us haha 
<br>
<img src="assets/funny.jpg"
     alt="funny us"
     style="width:160px; border-radius:10px; display:block; margin:10px auto;">
     
you always only smileeeee, lousyyy 😝 only when i ask u to funny face, you funny face 🤪 i kinda like this photo of us heh
     
aku cinta you`,

`halfway there biii!!! 🤍

It's my bro's birthday today!!! woohoo he big boi liao 👨‍🦰 

it's saturday, wonder what you will be doing today. let me guess, probably sleep till around 9am then wake up, run some errands haha then play badminton then hang with friends maybe?

let me know if i guessed it right hahhaha

if i did, you owe me a dare kekekke

ngo oi nei (do you know what language is this?)`,

`I wonder where I will be on this day. Wherever it is, know that you're still in my heart. ewwww hahhaa siiick

i love youu

here is a gif of me giving u some luvv 💗
<img src="assets/giveluv.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">`,

`Running out of ideas hahaha 

I really want to travel with youuu and i cant wait to go to places with youuu.

But i think i do have a little fear travelling with you haha. maybe, i'm scared our travelling styles wont match 😐 haha we will seeee when the day comes 👀

for now, let's just imagine us travelling here in this gif :)

<img src="assets/mountain.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">

One day closer to us...

wo ai ni hen duo`,

`If today feels heavy, remember:

I’m always on your side and I’m grateful for you and i love youuu

<img src="assets/hugs.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">

a mini quiz for today! guess how many i love yous includes the different languages i said in these letters?

whatsapp me the answer by the end of the day!

i love youuu`,

`i wonder if we fought already or like got annoyed at each other liao... 😬 hahaha if you did or we have, i'm sorry bb. Hope you forgive me. 

But if we haven't fought, lets give ourselves a little pat on the head haha like this gif keke

<img src="assets/pat.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">
     
wo ai ni bao bei`,

`thank you for loving me. even though we fought, i want and i choose you

<img src="assets/choose.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">`,

`I can’t wait to see you. I want to claim my hand holding, hugs and kisses and hand holding 😌🤍 

<div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
  <img src="assets/hands.gif" style="width:200px; border-radius:10px;">
  <img src="assets/hug-end.gif" style="width:200px; border-radius:10px;">
  <img src="assets/pecks.gif" style="width:200px; border-radius:10px;">
</div>`,

`I'm coming back today! See you soon, my love 💛 

<img src="assets/Excited.gif"
     style="width:180px; border-radius:12px; display:block; margin:10px auto;">

the answer for how many i love youu i said in these letters issss...

<span class="reveal-love">15</span>`
];


// ===== BUILD ENVELOPES =====
const grid = document.getElementById('grid');
const startDate = new Date("2026-02-15T00:00:00");

letters.forEach((text, i) => {

  const env = document.createElement('div');
  env.className = 'envelope';
  env.innerHTML = `<img src="assets/envelope.png" class="envelope-img">`;

  const label = document.createElement('div');
  label.className = 'label';
  label.innerText = `Feb ${15 + i}`;

  const wrap = document.createElement('div');
  wrap.appendChild(env);
  wrap.appendChild(label);

  // 🔐 LOCK LOGIC
  const today = new Date();
  const unlockDate = new Date(startDate);
  unlockDate.setDate(startDate.getDate() + i);

  if (today >= unlockDate) {
    env.onclick = () => openModal(text);
  } else {
    env.style.opacity = "0.4";
    env.style.filter = "grayscale(100%)";
    env.onclick = () => {
      alert("Not unlocked yet 💌");
    };
  }

  grid.appendChild(wrap);
});


// ===== MODAL FUNCTIONS =====
function openModal(text) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');

  modalText.innerHTML = text;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
