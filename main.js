function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks !== null) {
        navLinks.classList.toggle("active");
    }
}
function bookAppointment() {
    window.location.href = "/booking-page"; // replace with actual URL
}
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll('.standard-card');
    var observer = new IntersectionObserver(function (entries, observerInstance) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                target.classList.add('visible');
                observerInstance.unobserve(target); // Stop observing after fade-in
            }
        });
    }, {
        threshold: 0.1,
    });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var blocks = document.querySelectorAll('.section-block');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
    });
    blocks.forEach(function (block) { return observer.observe(block); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries, observerInstance) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                target.classList.add("visible");
                observerInstance.unobserve(target);
            }
        });
    }, {
        threshold: 0.1,
    });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-advisory-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-qsm-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { return observer.observe(card); });
});
function toggleService(headerElement) {
    var clickedCard = headerElement.closest('.academic-service-card');
    if (!clickedCard)
        return;
    // Close all other cards
    var allCards = document.querySelectorAll('.academic-service-card');
    allCards.forEach(function (card) {
        if (card !== clickedCard) {
            card.classList.remove('open');
        }
    });
    // Toggle the clicked one
    clickedCard.classList.toggle('open');
}
var navItems = [
    { name: "Home", href: "index.html" },
    { name: "Mission & Vision", href: "mission.html" },
    { name: "Gold Standard", href: "gold.html" },
    { name: "Services", href: "services.html" },
    { name: "Advisory Board", href: "advisory.html" },
    { name: "Demos", href: "demos.html" },
    { name: "Our Team", href: "team.html" },
    { name: "Contact", href: "contact.html" },
    { name: "About", href: "about.html" },
    { name: "Join Us!", href: "join.html" },
];
var searchInput = document.getElementById("search");
var searchResults = document.getElementById("search-results");
var activeIndex = -1;
function renderResults(query) {
    searchResults.innerHTML = "";
    activeIndex = -1;
    var matches = navItems.filter(function (item) {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    if (matches.length === 0) {
        searchResults.innerHTML = "<div class=\"no-result\">No pages found</div>";
        return;
    }
    matches.forEach(function (item, index) {
        var div = document.createElement("div");
        div.textContent = item.name;
        div.className = "search-result-item";
        div.setAttribute("data-href", item.href);
        div.setAttribute("data-index", index.toString());
        // ✅ Handle mouse clicks before blur
        div.addEventListener("mousedown", function () {
            window.location.href = item.href;
        });
        searchResults.appendChild(div);
    });
}
function updateHighlight(items) {
    items.forEach(function (item, i) {
        if (i === activeIndex) {
            item.classList.add("active");
            searchInput.value = item.textContent || "";
        }
        else {
            item.classList.remove("active");
        }
    });
}
searchInput.addEventListener("input", function () {
    var query = searchInput.value.trim();
    if (query.length > 0) {
        renderResults(query);
    }
    else {
        searchResults.innerHTML = "";
    }
});
searchInput.addEventListener("keydown", function (e) {
    var items = document.querySelectorAll(".search-result-item");
    if (items.length === 0)
        return;
    if (e.key === "ArrowDown") {
        activeIndex = (activeIndex + 1) % items.length;
        updateHighlight(items);
        e.preventDefault();
    }
    else if (e.key === "ArrowUp") {
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateHighlight(items);
        e.preventDefault();
    }
    else if (e.key === "Enter" && activeIndex !== -1) {
        var selected = items[activeIndex];
        if (selected) {
            var href = selected.getAttribute("data-href");
            if (href)
                window.location.href = href;
        }
    }
});
// Optional: Give a small delay before clearing to allow click to register
searchInput.addEventListener("blur", function () {
    setTimeout(function () {
        searchResults.innerHTML = "";
    }, 150);
});
document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var accordion = header.parentElement;
            var content = accordion.querySelector('.accordion-content');
            var isOpen = accordion.classList.contains('open');
            // Close all accordions
            document.querySelectorAll('.accordion.open').forEach(function (openAccordion) {
                openAccordion.classList.remove('open');
                var openContent = openAccordion.querySelector('.accordion-content');
                if (openContent) {
                    openContent.style.maxHeight = '';
                }
            });
            // Toggle current accordion
            if (!isOpen) {
                accordion.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
            else {
                accordion.classList.remove('open');
                content.style.maxHeight = '';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".toggle-header");
    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            var item = header.closest(".toggle-item");
            if (item) {
                item.classList.toggle("active");
            }
        });
    });
});
// deck slider
document.addEventListener('DOMContentLoaded', function () {
    var deck = document.getElementById('deck');
    if (!deck)
        return;
    var cards = deck.querySelectorAll('.deck-card');
    var currentIndex = 0;
    var advanceCard = function () {
        var total = cards.length;
        var currentCard = cards[currentIndex];
        var nextIndex = (currentIndex + 1) % total;
        var nextCard = cards[nextIndex];
        var futureCard = cards[(nextIndex + 1) % total];
        // Animate current out
        currentCard.classList.remove('active');
        currentCard.classList.add('exit');
        // Promote next card
        nextCard.classList.remove('next');
        nextCard.classList.add('active');
        // Setup future peek card
        futureCard.classList.add('next');
        // Cleanup after animation
        setTimeout(function () {
            currentCard.classList.remove('exit', 'next');
        }, 800);
        currentIndex = nextIndex;
    };
    // Autoplay interval (every 3.5 seconds)
    var autoplayInterval = setInterval(advanceCard, 3500);
    // Tap/click to manually advance (autoplay continues — remove line below to stop autoplay)
    deck.addEventListener('click', function () {
        advanceCard();
        // clearInterval(autoplayInterval); // Uncomment to stop autoplay on manual tap
    });
});
function toggleDropdown(header) {
    var section = header.closest(".survey-section");
    if (!section)
        return;
    var content = header.nextElementSibling;
    if (!content)
        return;
    var isOpen = content.classList.contains("open");
    // Close all
    section.querySelectorAll(".dropdown-content").forEach(function (c) {
        c.classList.remove("open");
        c.style.maxHeight = "0";
    });
    section.querySelectorAll(".dropdown-header span").forEach(function (s) { return (s.textContent = "▼"); });
    // Open clicked
    if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        var icon = header.querySelector("span");
        if (icon)
            icon.textContent = "▲";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".survey-section .dropdown-header");
    headers.forEach(function (header) {
        header.addEventListener("click", function () { return toggleDropdown(header); });
    });
});
