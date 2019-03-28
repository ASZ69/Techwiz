// JavaScript Document

$(document).ready(function () {
    var selected = localStorage.getItem("Theme");
    if (selected == null) {
        loadTheme("Red");
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
        case "Red":
            document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#C70407');
            document.documentElement.style.setProperty('--bg-alpha-overlay', 'rgba(0,0,0,0.87)');
            document.documentElement.style.setProperty('--icon-btn', '#FB0003');
			document.documentElement.style.setProperty('--nav-color', 'rgba(104, 99, 99, 0.80)');
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

        case "Sky Blue":
             document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#02C9C0');
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

        case "Orange":
            document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#FF8905');
            document.documentElement.style.setProperty('--bg-alpha-overlay', 'rgba(0,0,0,0.87)');
            document.documentElement.style.setProperty('--icon-btn', 'orange');
			document.documentElement.style.setProperty('--nav-color', 'rgba(21,21,21,0.95)');
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

        case "Pink":
            document.documentElement.style.setProperty('--bg-color', 'white');
            document.documentElement.style.setProperty('--index-overlay', '#000000');
            document.documentElement.style.setProperty('--hover-btn', '#8400C7');
            document.documentElement.style.setProperty('--bg-alpha-overlay', 'rgba(0,0,0,0.87)');
            document.documentElement.style.setProperty('--icon-btn', 'hotpink');
			document.documentElement.style.setProperty('--nav-color', 'rgba(21,21,21,0.95)');
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
    }
}