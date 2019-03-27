icons-cl// JavaScript Document

$(document).ready(function () {
    var selected = localStorage.getItem("Theme");
    if (selected == null) {
        loadTheme("Day");
    } else {
        loadTheme(selected);
    }
});

function changeTheme(ref) {
    var selected = ref.innerText;
    localStorage.setItem("Theme", selected);
    loadTheme(selected);
}

function loadTheme(selected) {
    switch (selected) {
        case "Day":
            document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#C70407');
            document.documentElement.style.setProperty('--bg-alpha-overlay', 'rgba(0,0,0,0.87)');
            document.documentElement.style.setProperty('--icon-btn', '#FB0003');
			document.documentElement.style.setProperty('--nav-color', 'rgba(104, 99, 99, 1.00)');
			document.documentElement.style.setProperty('--circle-color', '#999999');
		    document.documentElement.style.setProperty('--circle-bg-color', '#333');
			 document.documentElement.style.setProperty('--circle-hover-bg-color', 'rgba(21,21,21,0.95)');
			 document.documentElement.style.setProperty('--card-bg-color', 'rgba(90, 88, 88, 1.00)');
			document.documentElement.style.setProperty('--font-color', '#000000');
			document.documentElement.style.setProperty('--about-panal', '#000000');
			document.documentElement.style.setProperty('--search-bound', 'rgba(147,147,147,0.70)');
			document.documentElement.style.setProperty('--slide-icon', 'rgba(0,0,0,0.73)');
			document.documentElement.style.setProperty('--bg-shade', '#F8F8F8');
			
            break;

        case "Day (Colored)":
             document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#C70407');
            document.documentElement.style.setProperty('--bg-alpha-overlay', 'rgba(0,0,0,0.87)');
            document.documentElement.style.setProperty('--icon-btn', '#09C4B6');
			document.documentElement.style.setProperty('--nav-color', 'rgba(104, 99, 99, 1.00)');
			document.documentElement.style.setProperty('--circle-color', '#999999');
		    document.documentElement.style.setProperty('--circle-bg-color', '#333');
			 document.documentElement.style.setProperty('--circle-hover-bg-color', 'rgba(21,21,21,0.95)');
			 document.documentElement.style.setProperty('--card-bg-color', 'rgba(90, 88, 88, 1.00)');
			document.documentElement.style.setProperty('--font-color', '#000000');
			document.documentElement.style.setProperty('--about-panal', '#000000');
			document.documentElement.style.setProperty('--search-bound', 'rgba(147,147,147,0.70)');
			document.documentElement.style.setProperty('--slide-icon', 'rgba(0,0,0,0.73)');
			document.documentElement.style.setProperty('--bg-shade', '#F8F8F8');
			
            break;

        case "Night":
            document.documentElement.style.setProperty('--hover', '#FF6701');
            document.documentElement.style.setProperty('--index-overlay', 'rgba(255,87,0,0.55)');
            document.documentElement.style.setProperty('--hover-btn', 'rgba(255,87,0,1)');
            document.documentElement.style.setProperty('--t-md', 'white');
            document.documentElement.style.setProperty('--t-sm', 'white');
            document.documentElement.style.setProperty('--bg-cd', '#4F4E4E');
            document.documentElement.style.setProperty('--cd-t-sm', 'black');
            document.documentElement.style.setProperty('--cd-t-md', 'black');
            document.documentElement.style.setProperty('--bg', '#111');
            document.documentElement.style.setProperty('--bg-rev', '#fff');
            document.documentElement.style.setProperty('--bg-nav', '#000');
            break;

        case "Night (Colored)":
            document.documentElement.style.setProperty('--hover', '#FCF8C4');
            document.documentElement.style.setProperty('--index-overlay', 'rgba(252,255,229,0.65)');
            document.documentElement.style.setProperty('--hover-btn', 'rgba(252,255,229,1)');
            document.documentElement.style.setProperty('--t-md', '#D03E3D');
            document.documentElement.style.setProperty('--t-sm', '#00c07f');
            document.documentElement.style.setProperty('--bg-cd', '#262D36');
            document.documentElement.style.setProperty('--cd-t-sm', '#00c07f');
            document.documentElement.style.setProperty('--cd-t-md', '#D03E3D');
            document.documentElement.style.setProperty('--bg', '#313d4b');
            document.documentElement.style.setProperty('--bg-rev', '#f9f8fd');
            document.documentElement.style.setProperty('--bg-nav', '#680000');
            break;
    }
}