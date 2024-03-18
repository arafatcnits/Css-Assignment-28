    var scrollBtn = document.getElementById('scrollBtn');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop){
        // Scrolling down
        scrollBtn.innerHTML = '<i class="fas fa-angles-down"></i>';
      } else {
        // Scrolling up
        scrollBtn.innerHTML = '<i class="fas fa-angles-up"></i>';
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });

    scrollBtn.addEventListener('click', function() {
      if (lastScrollTop > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    });