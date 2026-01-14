/* ================= LETTER ================= */
const shortText = `Dear Riya 🌸

Some moments feel small at first,
but they stay with us quietly 🦋`;

const fullText = `Dear Riya 🌸

I don’t really know yet what I feel in my heart for you 💛,
or what you think about me — and I understand that you might see me as just a friend, nothing more than that 🤍.
I respect that completely, and I don’t want to assume anything that isn’t there.

But somewhere between 26th December 📅, when we met and talked,
and 27th December, when our conversations felt indirect yet full of feeling,
something quietly changed for me.
It wasn’t loud or sudden.
It wasn’t dramatic.
It was subtle — almost unnoticeable at first — but it stayed with me 🦋.

That day, when you were crying 😢,
I couldn’t ignore it.
I couldn’t pretend not to see it.
I couldn’t just walk away or act normal.
Seeing you like that affected me more than I expected.
I asked if you were okay because I genuinely wanted to know,
not because I felt I should.
We talked… 💬
and after that, something felt different —
like a door had opened slowly, without either of us forcing it ✨.

After that, so many small things started happening naturally 🌱 —
things that might seem ordinary on their own,
but together felt meaningful.
Sitting together in the library 📚,
talking more than before,
sharing quiet moments without realizing how time was passing.

Even small details started standing out to me —
like noticing that we were both born on the same day, a Wednesday 🗓️,
or how you started coming into my mind unexpectedly,
sometimes just because of your crokes,
sometimes for no clear reason at all.

On New Year’s Day 🎆,
when we wore almost the same colour clothes 👕👗,
I couldn’t help but smile 😊.
You looked genuinely cute —
honestly, you reminded me of Santa Claus 🎅 in the best way possible,
just because of your outfit and the colours you wore.
It was such a simple coincidence,
yet it stayed in my mind longer than I expected 💫.

And then there’s something I’ve never really experienced before.

The way you feel comfortable around me 🤍 —
even with touch —
it never felt awkward or forced.
It felt natural.
Easy.
Safe.
I’ve never been that touchy with anyone in my life,
not in that way,
not without feeling self-conscious or unsure.
But with you, it was different.
There was no tension,
no discomfort —
just comfort and closeness that felt honest 💞.

Somewhere in all these little moments —
the conversations,
the silences,
the coincidences,
the comfort —
it feels like a bond has been forming on its own 🌷.
Not rushed.
Not planned.
Just growing quietly,
like something that didn’t need permission to exist 🦋.

I feel like I think of you as more than a friend 💛.
If that’s possible, I’d be grateful 🌸.
And if it’s not, that’s completely okay too 🤍.
I don’t want to pressure anything
or change what already is.

What we already share is still beautiful in its own way ✨,
and I truly value it —
deeply and sincerely 💖.
`;


const letterBox = document.getElementById("letterBox");
let typing = false;

function typeText(text) {
  if (typing) return;
  typing = true;
  letterBox.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      letterBox.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(type, 30);
    } else {
      typing = false;
    }
  }
  type();
}

typeText(shortText);

/* ================= AUDIO (SAFE) ================= */
const song = document.getElementById("birthdaySong");

function playSong() {
  song.volume = 1;
  song.play().catch(() => {
    alert("Tap the screen once, then press Play 🎵");
  });
}

/* ================= BUTTONS ================= */
document.getElementById("musicBtn").addEventListener("click", playSong);

document.getElementById("confessBtn").addEventListener("click", () => {
  typeText(fullText);
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  playSong();
  for (let i = 0; i < 15; i++) createHeart();
});

/* ================= HEARTS ================= */
const heartBox = document.getElementById("floatingHearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartBox.appendChild(heart);

  let y = window.innerHeight;
  function move() {
    y -= 2;
    heart.style.top = y + "px";
    if (y < -50) heart.remove();
    else requestAnimationFrame(move);
  }
  move();
}

/* ================= FIREWORKS ================= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const sparks = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gold";
  sparks.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y -= 1.2;
    if (s.y < 0) s.y = canvas.height;
  });
  requestAnimationFrame(animate);
}
animate();
