{/* <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const signinBtn = document.getElementById('signin-btn');
    const heroSignin = document.getElementById('hero-signin');
    const getstartedBtn = document.getElementById('getstarted-btn');
    const heroGetStarted = document.getElementById('hero-getstarted');
    const signinModal = document.getElementById('signin-modal');
    const getstartedModal = document.getElementById('getstarted-modal');
    const topSearchInput = document.getElementById('top-search');
    const topSearchBtn = document.getElementById('top-search-btn');
    const mobileSearchInput = document.getElementById('mobile-search');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');

            menuToggle.addEventListener('click', () => sidebar.classList.toggle('show'));

            const openSignin = () => signinModal.classList.add('show');
            const openGetStarted = () => getstartedModal.classList.add('show');

    signinBtn.addEventListener('click', openSignin);
    heroSignin.addEventListener('click', openSignin);
    getstartedBtn.addEventListener('click', openGetStarted);
    heroGetStarted.addEventListener('click', openGetStarted);

            document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            signinModal.classList.remove('show');
            getstartedModal.classList.remove('show');
        });
            });

            window.addEventListener('click', (e) => {
                if (e.target === signinModal) signinModal.classList.remove('show');
    if (e.target === getstartedModal) getstartedModal.classList.remove('show');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                sidebar.classList.remove('show');
            }
        });
            });

            const handleSearch = (value) => {
        value = value.toLowerCase();
    const sections = ['buy-sell', 'lost-found', 'notes', 'Community'];
    let found = false;
    for (let id of sections) {
                    const section = document.getElementById(id);
    if (section && section.innerText.toLowerCase().includes(value)) {
        section.scrollIntoView({ behavior: 'smooth' });
    found = true;
    break;
                    }
                }
    if (!found) {
                    const area = document.getElementById('content-area');
    area.innerHTML = '<p class="text-red-500 text-xl font-bold">No results found for "' + value + '"</p>';
                }
            };

            topSearchBtn.addEventListener('click', () => handleSearch(topSearchInput.value));
            mobileSearchBtn.addEventListener('click', () => handleSearch(mobileSearchInput.value));
        });
</script> */}



