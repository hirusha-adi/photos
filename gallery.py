import os
block_start = r"""
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <meta name="keywords"
    content="hirusha,python,java,adobe,photoshop,photos,photography,css,html,programming,coding,security,blog,hirush adikari,adikari">
  <meta name="description" content="">
  <meta name="page_type" content="np-template-header-footer-from-plugin">

  <!-- Start of Meta Tags -->
  <!-- -------------------------------------------------------- -->

  <!-- https://metatags.io/ for generating the META tags -->
  <!-- Primary Meta Tags -->
  <title>Hirusha Adikari | Gallery</title>
  <meta name="title" content="Hirusha Adikari">
  <meta name="description" content="Hi 👋 I'm Hirusha Adikari. I'm a Student interested in Tech.">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://photos.hirusha.xyz">
  <meta property="og:title" content="Hirusha Adikari | Photos">
  <meta property="og:description" content="Hi 👋 I'm Hirusha Adikari. I'm a Student interested in Tech. I take photos.">
  <meta property="og:image"
    content="https://cdn.discordapp.com/attachments/877836565320187914/917609265475256390/teahub.io-rick-and-morty-wallpaper-558458.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://photos.hirusha.xyz">
  <meta property="twitter:title" content="Hirusha Adikari | Photos">
  <meta property="twitter:description"
    content="Hi 👋 I'm Hirusha Adikari. I'm a Student interested in Tech. I take photos.">
  <meta property="twitter:image"
    content="https://cdn.discordapp.com/attachments/877836565320187914/917609265475256390/teahub.io-rick-and-morty-wallpaper-558458.png">

  <!-- -------------------------------------------------------- -->
  <!-- End of Meta Tags -->

  <!-- Favicon - Default provided by StartBootstrap -->
  <link rel="icon" href="assets/img/favicon.png" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: PhotoFolio - v1.2.0
  * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
        <i class="bi bi-camera"></i>
        <h1>@hirushaadi</h1>
      </a>

      <!-- navbar Start -->
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="gallery.html" class="active">Gallery</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
      <!-- navbar End -->

      <div class="header-social-links">
        <a class="" href="https://github.com/hirusha-adi"><i class="bi bi-github"></i></a>
        <a class="" href="https://twitter.com/hirushaadi"><i class="bi bi-twitter"></i></a>
        <a class="" href="https://www.instagram.com/hirushaadi.photos"><i class="bi bi-instagram"></i></a>
        <a class="" href="https://www.instagram.com/hirushaadi"><i class="bi bi-instagram"></i></a>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  <!-- End Header -->

  <main id="main" data-aos="fade" data-aos-delay="1500">

    <!-- ======= End Page Header ======= -->
    <div class="page-header d-flex align-items-center">
      <div class="container position-relative">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 text-center">
            <h2>Gallery</h2>
            <p>
              I hope you will enjoy viewing these images as much as I enjoyed capturing them.
            </p>
          </div>
        </div>
      </div>
    </div><!-- End Page Header -->

    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery">
      <div class="container-fluid">

        <div class="row gy-4 justify-content-center">"""

block_code = f"""
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="assets/img/gallery/gallery-1.jpg" class="img-fluid" alt="">
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/gallery-1.jpg" title="REPLACE THIS" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        """

block_end = r"""</div>

  </div>
</section><!-- End Gallery Section -->

</main><!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>PhotoFolio</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/ -->
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer><!-- End Footer -->

<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
  class="bi bi-arrow-up-short"></i></a>

<div id="preloader">
<div class="line"></div>
</div>

<!-- Vendor JS Files -->
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="assets/js/main.js"></script>

</body>

</html>
"""

images = os.listdir(os.path.join(os.getcwd(), 'media', 'large'))

max_no = max([int(image.split(".")[0]) for image in images])

final_to_append = ""

for i in range(max_no, 0, -1):
    block_code = f"""
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="./media/large/{i}.jpg" class="img-fluid" alt="">
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="./media/large/{i}.jpg" title="Image {i}" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
              </div>
            </div>
          </div>
                """
    final_to_append += block_code

print(final_to_append)

save = block_start + final_to_append + block_end
fname = os.path.join(os.getcwd(), "gallery.html")
if os.path.isfile(fname):
    os.remove(fname)
with open(fname, "w", encoding="utf-8") as _file:
    _file.write(save)
    print(f"[+] Added {max} images to {fname} in descending order")
