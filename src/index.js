



const skull = 
`
                   .ed"""" """$$$$be.
                   -"           ^""**$$$e.
                 ."                   '$$$c
                /                      "4$$b
               d  3                      $$$$
               $  *                   .$$$$$$
              .$  ^c           $$$$$e$$$$$$$$.
              d$L  4.         4$$$$$$$$$$$$$$b
              $$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
  e$""=.      $$$$P d$$$$F $ $$$$$$$$$- $$$$$$
 z$$b. ^c     3$$$F "$$$$b   $"$$$$$$$  $$$$*"      .=""$c
4$$$$L        $$P"  "$$b   .$ $$$$$...e$$        .=  e$$$.
^*$$$$$c  %..   *c    ..    $$ 3$$$$$$$$$$eF     zP  d$$$$$
  "**$$$ec   "   %ce""    $$$  $$$$$$$$$$*    .r" =$$$$P""
        "*$b.  "c  *$e.    *** d$$$$$"L$$    .d"  e$$***"
          ^*$$c ^$c $$$      4J$$$$$% $$$ .e*".eeP"
             "$$$$$$"'$=e....$*$$**$cz$$" "..d$*"
               "*$$$  *=%4.$ L L$ P3$$$F $$$P"
                  "$   "%*ebJLzb$e$$$$$b $P"
                    %..      4$$$$$$$$$$ "
                     $$$e   z$$$$$$$$$$%
                      "*$c  "$$$$$$$P"
                       ."""*$$$$$$$$bc
                    .-"    .$***$$$"""*e.
                 .-"    .e$"     "*$c  ^*b.
          .=*""""    .e$*"          "*bc  "*$e..
        .$"        .z*"               ^*$e.   "*****e.
        $$ee$c   .d"                     "*$.        3.
        ^*$E")$..$"                         *   .ee==d%
           $.d$$$*                           *  J$$$e*
            """""                              "$$$"

`

console.log(skull);
const base = document.getElementsByClassName('root')[0];
const inner_root = document.getElementsByClassName('inner_root')[0];
const skull_wrap = document.getElementsByClassName('skull_wrap')[0];
const audio = new Audio('./src/assets/metal.wav');

base.addEventListener('mouseover', () => {
  audio.play();
});

base.addEventListener('mouseleave', () => {
  audio.pause();
});

let last_scroll_pos = 0;
let ticking = false;
let display = true;
const lines = skull.split('\n')

for (line of lines) {
	const pre = document.createElement('pre');
	pre.innerHTML = line
	skull_wrap.appendChild(pre)
}

(function deathCycle() {
  const rand = Math.round(Math.random() * (1000 - 500));
  setTimeout(() => {
		if (display) {
			inner_root.style.display = 'none';
			skull_wrap.style.display = 'block';
			display = false;
		}
    else {
    	inner_root.style.display = 'flex'
    	skull_wrap.style.display = 'none'
    	display = true;
    }
    deathCycle();  
  }, rand);
})();

deathPact = scroll_pos => {
	document.body.style.backgroundColor = `rgb(${scroll_pos/3}, 0, 0)`;
}

window.addEventListener('scroll', e => {
  last_scroll_pos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      deathPact(last_scroll_pos);
      ticking = false;
    });
    ticking = true;
  }
});



