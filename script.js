const trips = [
  {
    emoji: "🏛️",
    img: "foto/panteon.jpg",
    title: "Рим → Неаполь → Амальфі",
    shortDesc: "Класика, але дуже атмосферна.",
    vibe: "море · їжа · естетика",
    fullDesc: "Ця подорож — справжня quintessenza Італії. Починаєш з вічного Риму: Колізей, Ватикан, кава на Piazza Navona. Потім — шумний Неаполь з найкращою піцою в світі. Фінал — казкове Амальфітанське узбережжя: бірюзове море, лимони та скелі.",
    links: [
      { text: "🏟 Рим — офіційний туристичний сайт", href: "https://www.scopriroma.com/" },
      { text: "🍕 Неаполь — visitnaples.eu", href: "https://www.visitnaples.eu/en" },
      { text: "🌊 Амальфі — amalficoast.com", href: "https://www.amalficoast.com/" },
    ],
    href: "roma.html",
  },
  {
    emoji: "🏔️",
    img: "foto/milan2.jpg",
    title: "Мілан → Комо → Лугано",
    shortDesc: "Спокійний та дорогий вайб.",
    vibe: "чіл · природа · фото",
    fullDesc: "Для тих, хто цінує стиль та тишу. Мілан — модний шопінг та собор Дуомо. Озеро Комо вражає пейзажами. Лугано — швейцарське повітря та неквапливе життя.",
    links: [
      { text: "💎 Мілан — visitamilano.it", href: "https://www.visitamilano.it/en" },
      { text: "🌿 Озеро Комо — lakecomocity.com", href: "https://www.lakecomocity.com/" },
    ],
    href: "milan.html",
  },
  {
    emoji: "💃",
    img: "foto/barcelona2.jpeg",
    title: "Барселона → Валенсія → Ібіца",
    shortDesc: "Іспанський драйв і море.",
    vibe: "тус · море · драйв",
    fullDesc: "Сонячна Іспанія у трьох актах. Барселона — Ґауді та пляж. Валенсія — батьківщина паельї. Ібіца — схід сонця на березі моря під музику.",
    links: [
      { text: "🎨 Барселона — barcelonaturisme.com", href: "https://www.barcelonaturisme.com/en/" },
      { text: "🥘 Валенсія — visitvalencia.com", href: "https://www.visitvalencia.com/en" },
    ],
    href: "barcelona.html",
  },
  {
    emoji: "🥐",
    img: "foto/paris2.jpg",
    title: "Париж → Луара → Бордо → Ніцца",
    shortDesc: "Романтика, вино та краса.",
    vibe: "романтика · вино · шарм",
    fullDesc: "Франція у всій красі: Париж, замки Луари, вина Бордо і лазурний берег Ніцци. Ідеально для тих, хто хоче поєднати культуру, природу та гастрономію.",
    links: [
      { text: "🗼 Париж — parisjetaime.com", href: "https://www.parisjetaime.com/eng" },
    ],
    href: "france.html",
  },
  {
    emoji: "🚲",
    img: "foto/amsterdam2.webp",
    title: "Амстердам → Роттердам → Брюгге → Брюссель",
    shortDesc: "Канали, архітектура і бельгійський шоколад.",
    vibe: "місто · канали · архітектура",
    fullDesc: "Нідерланди та Бельгія у чотирьох актах. Амстердам — канали і найкращі музеї. Роттердам — сучасна архітектура. Брюгге — середньовічна казка. Брюссель — серце Європи з вафлями і пивом.",
    links: [
      { text: "🚲 Амстердам — iamsterdam.com", href: "https://www.iamsterdam.com/en" },
      { text: "🍺 Брюгге — visitbruges.be", href: "https://www.visitbruges.be/en" },
      { text: "🧇 Брюссель — visit.brussels", href: "https://visit.brussels/en" },
    ],
    href: "netherlands.html",
  },
  {
    emoji: "🏰",
    img: "foto/dresden2.jpg",
    title: "Берлін → Дрезден → Мюнхен → Альпи",
    shortDesc: "Від столиці до засніжених вершин Альп.",
    vibe: "міста · природа · Альпи",
    fullDesc: "Германія від А до Я. Берлін — історія і свобода. Дрезден — барокова краса. Мюнхен — пиво і баварські традиції. Альпи — замок Нойшванштайн і найвища вершина країни.",
    links: [
      { text: "🏰 Берлін — visitberlin.de", href: "https://www.visitberlin.de/en" },
      { text: "🍺 Мюнхен — muenchen.de", href: "https://www.muenchen.de/en" },
      { text: "⛰️ Баварські Альпи — gapa.de", href: "https://www.gapa.de/en/" },
    ],
    href: "germany.html",
  },
];

// ======== СЛАЙДЕР ========
function buildSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;

  const CARD_WIDTH = 260;
  const GAP = 20;
  let manualOffset = 0;
  let isManual = false;

  [...trips, ...trips].forEach((trip, i) => {
    const card = document.createElement('div');
    card.className = 'trip-card-slide';
    card.innerHTML =
      '<img src="' + trip.img + '" alt="' + trip.title + '" style="width:100%;height:130px;object-fit:cover;border-radius:10px;margin-bottom:10px;">' +
      '<h5>' + trip.title + '</h5>' +
      '<p class="card-desc">' + trip.shortDesc + '</p>' +
      '<span class="card-vibe">' + trip.vibe + '</span>' +
      '<button class="card-btn-slide">Детальніше</button>';
    card.addEventListener('click', () => openModal(i % trips.length));
    track.appendChild(card);
  });

  const dotsWrap = document.getElementById('sliderDots');
  if (dotsWrap) {
    trips.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Подорож ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function updateDots(idx) {
    document.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  function enterManual() {
    if (isManual) return;
    isManual = true;
    const matrix = new DOMMatrix(getComputedStyle(track).transform);
    const currentX = matrix.m41;
    track.classList.remove('auto-scroll');
    track.style.transform = 'translateX(' + currentX + 'px)';
    manualOffset = Math.round(Math.abs(currentX) / (CARD_WIDTH + GAP)) % trips.length;
    updateDots(manualOffset);
  }

  function goTo(idx) {
    enterManual();
    manualOffset = ((idx % trips.length) + trips.length) % trips.length;
    track.style.transform = 'translateX(-' + (manualOffset * (CARD_WIDTH + GAP)) + 'px)';
    updateDots(manualOffset);
  }

  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(manualOffset - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(manualOffset + 1));
}

// ======== МОДАЛЬНЕ ВІКНО ========
function openModal(idx) {
  const t = trips[idx];
  const emojiEl = document.getElementById('modalEmoji');
  if (t.img) {
    emojiEl.innerHTML = '<img src="' + t.img + '" alt="' + t.title + '" style="width:100%;height:200px;object-fit:cover;border-radius:12px;margin-bottom:4px;">';
  } else {
    emojiEl.textContent = t.emoji;
  }
  document.getElementById('modalTitle').textContent = t.title;
  document.getElementById('modalVibe').textContent = t.vibe;
  document.getElementById('modalBody').textContent = t.fullDesc;

  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = t.links
    .map(l => '<a href="' + l.href + '" target="_blank" rel="noopener">' + l.text + '</a>')
    .join('');

  const action = document.getElementById('modalAction');
  action.href = t.href;
  action.textContent = t.href === '#' ? 'Скоро...' : 'Вибрати цю подорож →';
  action.style.opacity = t.href === '#' ? '0.5' : '1';
  action.style.pointerEvents = t.href === '#' ? 'none' : 'auto';

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});

document.addEventListener('DOMContentLoaded', buildSlider);

// ======== ФІЛЬТРИ SIDEBAR ========
(function() {
  let activeVibe = 'all';
  let activeCountry = null;

  function applyFilters() {
    const cards = document.querySelectorAll('#tripsGrid .trip-card');
    if (!cards.length) return;
    let visible = 0;
    cards.forEach(card => {
      const vibeOk = activeVibe === 'all' || card.dataset.vibe === activeVibe;
      const countryOk = !activeCountry || card.dataset.country.split(',').includes(activeCountry);
      const show = vibeOk && countryOk;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    const c = document.getElementById('tripsCount');
    if (c) c.textContent = visible + ' ' + (visible === 1 ? 'подорож' : visible < 5 ? 'подорожі' : 'подорожей');
  }

  document.querySelectorAll('[data-vibe]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-vibe]').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      activeVibe = btn.dataset.vibe;
      applyFilters();
    });
  });

  document.querySelectorAll('[data-country]').forEach(tag => {
    tag.addEventListener('click', () => {
      const val = tag.getAttribute('data-country');
      if (activeCountry === val) {
        activeCountry = null;
        tag.classList.remove('on');
      } else {
        document.querySelectorAll('[data-country]').forEach(t => t.classList.remove('on'));
        activeCountry = val;
        tag.classList.add('on');
      }
      applyFilters();
    });
  });

  const calTrigger = document.getElementById('calTrigger');
  if (!calTrigger) return;

  const today = new Date(); today.setHours(0,0,0,0);
  let calYear = today.getFullYear();
  let calMonth = today.getMonth();
  const MONTHS = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
  const DAYS = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
  let selectedDate = null;

  function renderCal() {
    document.getElementById('calMonthLabel').textContent = MONTHS[calMonth] + ' ' + calYear;
    const g = document.getElementById('calGrid');
    g.innerHTML = '';
    DAYS.forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal-dname';
      el.textContent = d;
      g.appendChild(el);
    });
    let dow = new Date(calYear, calMonth, 1).getDay();
    dow = dow === 0 ? 6 : dow - 1;
    for (let i = 0; i < dow; i++) g.appendChild(document.createElement('div'));
    const total = new Date(calYear, calMonth + 1, 0).getDate();
    for (let d = 1; d <= total; d++) {
      const date = new Date(calYear, calMonth, d);
      const btn = document.createElement('button');
      btn.className = 'cal-day';
      btn.textContent = d;
      if (date < today) {
        btn.classList.add('past');
        btn.disabled = true;
      } else {
        if (selectedDate && date.toDateString() === selectedDate.toDateString()) btn.classList.add('selected');
        btn.addEventListener('click', () => {
          selectedDate = date;
          document.getElementById('calLabel').textContent = d + ' ' + MONTHS[calMonth] + ' ' + calYear;
          calTrigger.classList.add('on');
          document.getElementById('calHint').textContent = 'Дату обрано ✓';
          document.getElementById('calBody').classList.remove('open');
          renderCal();
        });
      }
      g.appendChild(btn);
    }
  }

  calTrigger.addEventListener('click', () => {
    const body = document.getElementById('calBody');
    body.classList.toggle('open');
    if (body.classList.contains('open')) renderCal();
  });

  document.getElementById('calPrev').addEventListener('click', () => {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCal();
  });
  document.getElementById('calNext').addEventListener('click', () => {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCal();
  });
  document.getElementById('calClear').addEventListener('click', () => {
    selectedDate = null;
    document.getElementById('calLabel').textContent = 'Вибрати дату';
    calTrigger.classList.remove('on');
    document.getElementById('calHint').textContent = 'Вибери дату початку';
    renderCal();
  });
})();

// ======== FLATPICKR — index.html ========
(function initDates() {
  const checkinEl = document.getElementById('bookingCheckin');
  if (!checkinEl) return;

  const checkoutPicker = flatpickr('#bookingCheckout', {
    locale: 'uk', minDate: new Date(Date.now() + 86400000), dateFormat: 'd.m.Y', disableMobile: true,
  });

  flatpickr('#bookingCheckin', {
    locale: 'uk', minDate: 'today', dateFormat: 'd.m.Y', disableMobile: true,
    onChange: function(selectedDates) {
      const next = new Date(selectedDates[0]);
      next.setDate(next.getDate() + 1);
      checkoutPicker.set('minDate', next);
      if (checkoutPicker.selectedDates[0] <= selectedDates[0]) checkoutPicker.setDate(next);
    }
  });
})();

// ======== BOOKING URL ========
function toBookingDate(str) {
  if (!str) return '';
  const parts = str.split('.');
  if (parts.length !== 3) return '';
  return parts[2] + '-' + parts[1] + '-' + parts[0];
}

function buildBookingUrl(city, checkin, checkout, budget) {
  const AID = 'YOUR_AFFILIATE_ID';
  let url = 'https://www.booking.com/searchresults.html?aid=' + AID + '&ss=' + encodeURIComponent(city) + '&lang=uk';
  if (checkin)  url += '&checkin='  + toBookingDate(checkin);
  if (checkout) url += '&checkout=' + toBookingDate(checkout);
  if (budget) { const p = budget.split('-'); url += '&nflt=price%3DEUR-' + p[0] + '-' + p[1] + '-1'; }
  return url;
}

function searchHotels() {
  const city = document.getElementById('bookingCity')?.value;
  const checkin = document.getElementById('bookingCheckin')?.value;
  const checkout = document.getElementById('bookingCheckout')?.value;
  const budget = document.getElementById('bookingBudget')?.value;
  if (!checkin || !checkout) { alert('Будь ласка, вкажи дати заїзду та виїзду'); return; }
  window.open(buildBookingUrl(city, checkin, checkout, budget), '_blank');
}

function quickSearch(city) {
  const checkin = document.getElementById('bookingCheckin')?.value;
  const checkout = document.getElementById('bookingCheckout')?.value;
  window.open(buildBookingUrl(city, checkin, checkout, ''), '_blank');
}

// ======== FLATPICKR — сторінки подорожей ========
(function initTripDates() {
  const checkinEl = document.getElementById('tripCheckin');
  if (!checkinEl) return;

  const checkoutTripPicker = flatpickr('#tripCheckout', {
    locale: 'uk', minDate: new Date(Date.now() + 86400000), dateFormat: 'd.m.Y', disableMobile: true,
    onChange: function() { renderTripCities(); }
  });

  flatpickr('#tripCheckin', {
    locale: 'uk', minDate: 'today', dateFormat: 'd.m.Y', disableMobile: true,
    onChange: function(selectedDates) {
      const next = new Date(selectedDates[0]);
      next.setDate(next.getDate() + 1);
      checkoutTripPicker.set('minDate', next);
      if (checkoutTripPicker.selectedDates[0] <= selectedDates[0]) checkoutTripPicker.setDate(next);
      renderTripCities();
    }
  });

  const budget = document.getElementById('tripBudget');
  if (budget) budget.addEventListener('change', renderTripCities);
})();

// ======== МІСТА МАРШРУТУ ========
if (typeof tripCities === 'undefined') { var tripCities = []; }

function buildTripUrl(bookingCity) {
  const AID = 'YOUR_AFFILIATE_ID';
  const checkin  = document.getElementById('tripCheckin')?.value  || '';
  const checkout = document.getElementById('tripCheckout')?.value || '';
  const budget   = document.getElementById('tripBudget')?.value   || '';
  let url = 'https://www.booking.com/searchresults.html?aid=' + AID + '&ss=' + encodeURIComponent(bookingCity) + '&lang=uk';
  if (checkin)  url += '&checkin='  + toBookingDate(checkin);
  if (checkout) url += '&checkout=' + toBookingDate(checkout);
  if (budget) { const p = budget.split('-'); url += '&nflt=price%3DEUR-' + p[0] + '-' + p[1] + '-1'; }
  return url;
}

function renderTripCities() {
  const grid = document.getElementById('tripCitiesGrid');
  if (!grid) return;
  grid.innerHTML = tripCities.map(city =>
    '<div class="booking-city-card">' +
      (city.img
        ? '<img src="' + city.img + '" alt="' + city.name + '" style="width:100%;height:140px;object-fit:cover;border-radius:10px;margin-bottom:12px;">'
        : '<span class="city-emoji">' + city.emoji + '</span>') +
      '<h3>' + city.name + '</h3>' +
      '<p class="city-desc">' + city.desc + '</p>' +
      '<p class="city-price">Від <span>' + city.priceFrom + '</span> за ніч</p>' +
      '<a class="booking-city-btn" href="' + buildTripUrl(city.booking) + '" target="_blank" rel="noopener">Шукати готелі →</a>' +
    '</div>'
  ).join('');
}

function searchAllCities() {
  if (typeof tripCities !== 'undefined' && tripCities.length > 0) {
    window.open(buildTripUrl(tripCities[0].booking), '_blank');
  }
}

document.addEventListener('DOMContentLoaded', renderTripCities);

// ======== ТРАНСПОРТ ========
var activeTransport = 'bus';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.transport-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.transport-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeTransport = btn.dataset.transport;
      var hint = document.getElementById('transportHint');
      if (hint) hint.textContent = '';
    });
  });
});

function searchTransport() {
  var fromEl = document.getElementById('transportFrom');
  var toEl   = document.getElementById('transportTo');
  var hint   = document.getElementById('transportHint');
  if (!fromEl || !toEl) return;
  var from = fromEl.value.trim();
  var to   = toEl.value.trim();
  if (!from || !to) {
    if (hint) { hint.textContent = 'Вкажи обидва міста'; hint.style.color = '#ff6b6b'; }
    return;
  }
  if (hint) hint.style.color = 'var(--accent-text)';
  var url = '';
  if (activeTransport === 'bus') {
    url = 'https://www.rome2rio.com/s/' + encodeURIComponent(from) + '/' + encodeURIComponent(to);
    if (hint) hint.textContent = '';
  }
  if (activeTransport === 'plane') {
    url = 'https://www.skyscanner.net';
    if (hint) hint.textContent = 'Введи ' + from + ' - ' + to + ' на сайті Skyscanner';
  }
  if (activeTransport === 'train') {
    url = 'https://www.thetrainline.com';
    if (hint) hint.textContent = 'Введи ' + from + ' - ' + to + ' на сайті Trainline';
  }
  window.open(url, '_blank');
}

// ======== КОНТАКТНА ФОРМА ========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const msg = document.getElementById('formMsg');
    const name    = contactForm.querySelector('[name="name"]').value.trim();
    const email   = contactForm.querySelector('[name="email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) {
      msg.style.display = 'block'; msg.style.background = 'rgba(255,80,80,0.15)';
      msg.style.border = '1px solid rgba(255,80,80,0.3)'; msg.style.color = '#ff8080';
      msg.textContent = 'Будь ласка, заповни всі поля'; return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.style.display = 'block'; msg.style.background = 'rgba(255,80,80,0.15)';
      msg.style.border = '1px solid rgba(255,80,80,0.3)'; msg.style.color = '#ff8080';
      msg.textContent = 'Введи правильний email'; return;
    }
    btn.textContent = 'Надсилаємо...'; btn.disabled = true;
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST', body: new FormData(contactForm), headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        msg.style.display = 'block'; msg.style.background = 'rgba(79,142,247,0.15)';
        msg.style.border = '1px solid rgba(79,142,247,0.3)'; msg.style.color = '#82b4ff';
        msg.textContent = 'Повідомлення відправлено! Дякуємо за звернення.';
        contactForm.reset(); btn.textContent = 'Надіслати'; btn.disabled = false;
      } else { throw new Error(); }
    } catch {
      msg.style.display = 'block'; msg.style.background = 'rgba(255,80,80,0.15)';
      msg.style.border = '1px solid rgba(255,80,80,0.3)'; msg.style.color = '#ff8080';
      msg.textContent = 'Помилка відправки. Спробуй ще раз.';
      btn.textContent = 'Надіслати'; btn.disabled = false;
    }
  });
}

// ======== АНІМОВАНА КАРТА ========
function initHeroMap(canvasId, points) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var lons    = points.map(function(p) { return p.lon; });
  var lats    = points.map(function(p) { return p.lat; });
  var dMinLon = Math.min.apply(null, lons) - 5;
  var dMaxLon = Math.max.apply(null, lons) + 5;
  var dMinLat = Math.min.apply(null, lats) - 5;
  var dMaxLat = Math.max.apply(null, lats) + 5;

  function project(lat, lon, w, h) {
    var x = ((lon - dMinLon) / (dMaxLon - dMinLon)) * (w * 0.44) + (w * 0.56);
    var y = ((dMaxLat - lat) / (dMaxLat - dMinLat)) * (h * 0.85) + (h * 0.075);
    return { x: x, y: y };
  }

  var dots = [];
  for (var dlat = dMinLat; dlat <= dMaxLat; dlat += 1.5) {
    for (var dlon = dMinLon; dlon <= dMaxLon; dlon += 2) {
      dots.push({
        lat: dlat, lon: dlon,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.4
      });
    }
  }

  var t        = 0;
  var pulse    = 0;
  var lastTime = 0;

  var isVisible = true;
  var observer  = new IntersectionObserver(function(entries) {
    isVisible = entries[0].isIntersecting;
  });
  observer.observe(canvas);

  function draw(timestamp) {
    if (timestamp - lastTime < 33) { requestAnimationFrame(draw); return; }
    if (document.hidden || !isVisible) { requestAnimationFrame(draw); return; }
    lastTime = timestamp;

    var w = canvas.width, h = canvas.height;
    if (!w || !h) { requestAnimationFrame(draw); return; }
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, w, h);

    // Плавний градієнт справа
    var grad = ctx.createLinearGradient(w * 0.45, 0, w, 0);
    grad.addColorStop(0,   'rgba(20,10,50,0)');
    grad.addColorStop(0.2, 'rgba(20,10,50,0.25)');
    grad.addColorStop(1,   'rgba(10,8,30,0.45)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Сітка
    for (var glat = Math.ceil(dMinLat); glat <= dMaxLat; glat += 2) {
      var gp1 = project(glat, dMinLon, w, h);
      var gp2 = project(glat, dMaxLon, w, h);
      ctx.beginPath(); ctx.moveTo(gp1.x, gp1.y); ctx.lineTo(gp2.x, gp2.y);
      ctx.strokeStyle = 'rgba(79,142,247,0.08)'; ctx.lineWidth = 0.5; ctx.stroke();
    }
    for (var glon = Math.ceil(dMinLon); glon <= dMaxLon; glon += 2) {
      var gp3 = project(dMaxLat, glon, w, h);
      var gp4 = project(dMinLat, glon, w, h);
      ctx.beginPath(); ctx.moveTo(gp3.x, gp3.y); ctx.lineTo(gp4.x, gp4.y);
      ctx.strokeStyle = 'rgba(79,142,247,0.08)'; ctx.lineWidth = 0.5; ctx.stroke();
    }

    // Фонові точки
    dots.forEach(function(d) {
      var p = project(d.lat, d.lon, w, h);
      var alpha = 0.1 + 0.1 * Math.sin(t * d.speed + d.phase);
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(130,180,255,' + alpha + ')'; ctx.fill();
    });

    // Лінії маршруту
    var projected = points.map(function(pt) { return project(pt.lat, pt.lon, w, h); });
    for (var i = 0; i < projected.length - 1; i++) {
      var a = projected[i], b = projected[i + 1];
      var cx = (a.x + b.x) / 2, cy = Math.min(a.y, b.y) - 40;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(cx, cy, b.x, b.y);
      ctx.strokeStyle = 'rgba(79,142,247,0.65)'; ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]); ctx.stroke(); ctx.setLineDash([]);
    }

    // Точки міст
    projected.forEach(function(p, i) {
      var pr = (pulse + i * 25) % 100 / 100;
      var pr2 = pr * 28;
      ctx.beginPath(); ctx.arc(p.x, p.y, pr2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79,142,247,' + (0.12 * (1 - pr)) + ')'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 11, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79,142,247,0.2)'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#82b4ff'; ctx.fill();
      ctx.font = '500 13px DM Sans, sans-serif';
      ctx.fillStyle = 'rgba(240,240,240,0.95)';
      ctx.textAlign = 'center';
      ctx.fillText(points[i].name, p.x, p.y - 18);
    });

    t += 0.02; pulse += 0.5;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

// ======== ФОНОВИЙ CANVAS — index.html ========
document.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('bgMap')) return;
  initHeroMap('bgMap', [
    { name: 'Рим',       lat: 41.9, lon: 12.5 },
    { name: 'Мілан',     lat: 45.5, lon: 9.2  },
    { name: 'Барселона', lat: 41.4, lon: 2.2  },
    { name: 'Париж',     lat: 48.8, lon: 2.3  },
    { name: 'Амстердам', lat: 52.4, lon: 4.9  },
    { name: 'Берлін',    lat: 52.5, lon: 13.4 },
  ]);
});