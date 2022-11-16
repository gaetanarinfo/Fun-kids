<?php include_once('modals/cookies.php'); ?>
<?php include_once('modals/cg.php'); ?>
<?php include_once('modals/rdc.php'); ?>
<?php include_once('modals/pc.php'); ?>
<?php include_once('modals/charte.php'); ?>
<?php include_once('modals/securite.php'); ?>
<?php include_once('modals/chat_message.php'); ?>

<?php if (!empty($_SESSION['user_id'])) {
    include_once('chat-message.php');
}
?>

<?php $userP = selectDB('*', 'users', 'id = "' . $_SESSION['user_id'] . '"', $db, '1'); ?>

<footer class="footer mt-auto py-3 bg-light" style="position: static;bottom: 0;width: 100%;">

    <div class="container text-center">
        <div class="social">
            <h5>Suivez-nous sur les réseaux sociaux !</h5>

            <div class="d-inline-block">
                <a href="https://business.facebook.com/loveandheart72/" target="_blank"><img src="<?= $static_img ?>facebook.png" alt="Facebook" /></a>
                <a href="https://twitter.com/Loveandheart42" target="_blank"><img class="ms-1" src="<?= $static_img ?>twitter.png" alt="Twitter" /></a>
            </div>
        </div>
    </div>

    <hr style="width: 70%;text-align: center;margin-left: auto;margin-right: auto;" />

    <div class="container text-center">
        <div class="footer_block">
            <p>Une visibilité étendue de votre profil : En créant votre profil sur Love and heart, celui-ci est visible sur les déclinaisons locales de notre service utilisant la même plateforme sous différentes marques. Pour plus d’informations sur les modalités de visibilité étendue de votre profil, cliquez ici.</p>
            <p>*Rencontres gratuites</p>
            <p>**Estimation du nombre de couples formés sur les sites du groupe Love and heart en Europe. Chiffre obtenu par l’extrapolation des résultats d’une enquête réalisée par Research Now en avril 2018, sur 59 931 personnes résidant en Europe (France, Royaume-Uni, Allemagne, Pays-Bas, Italie, Espagne et Suède) âgés de plus de 18 ans, à la population totale de cette tranche d’âge (Source eurostat 2018). Il résulte de cette étude que 6% des personnes interrogées ont déclaré avoir été en couple avec une personne rencontrée sur un des sites du groupe Love and heart.</p>
            <p>***Selon une étude TNS réalisée pour Love and heart du 30 octobre au 8 novembre 2017, sur un échantillon représentatif de 1660 célibataires âgés de 18 à 65 ans en France. Résultats observés parmi des célibataires connaissant au moins un service de rencontre en ligne.</p>
            <p>****Chaque description et photo de profil est modérée</p>
        </div>
        <div class="footer_link">
            <a href="" class="text-black" data-bs-toggle="modal" data-bs-target="#cg">Conditions générales</a> | <a href="" data-bs-toggle="modal" data-bs-target="#rdc" class="text-black">Règles de communauté</a> | <a href="" data-bs-toggle="modal" data-bs-target="#pc" class="text-black">Politique de confidentialité</a> | <a href="" data-bs-toggle="modal" data-bs-target="#charte" class="text-black">Charte d’utilisation des cookies</a> | <a href="" data-bs-toggle="modal" data-bs-target="#securite" class="text-black">Conseils de sécurité</a>
        </div>
        <span class="text-black"> © Copyright - Seigneur Gaëtan - Love and heart - <?= date('Y') ?></span>
    </div>
</footer>

<script type="text/javascript" src="<?= $static_url ?>bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="<?= $static_url ?>bootstrap/js/popper.min.js" crossorigin="anonymous"></script>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script src="<?= $static_url ?>js/jquery.cookie.js"></script>

<script type="text/javascript" src="<?= $static_url ?>js/cookie.js"></script>

<script src="<?= $static_url ?>js/navbar.js?<?= time() ?>" crossorigin="anonymous"></script>

<?php if ($_SERVER['REQUEST_URI'] == "/") { ?>
    <script src="<?= $static_url ?>js/home.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php if (empty($_SESSION['user_id'])) { ?>
        <script src="<?= $static_url ?>js/googleApi.js" crossorigin="anonymous"></script>
    <?php } ?>
<?php } ?>

<?php if ($_SERVER['REQUEST_URI'] == "/home") { ?>
    <script src="<?= $static_url ?>js/home.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php if (empty($_SESSION['user_id'])) { ?>
        <script src="<?= $static_url ?>js/googleApi.js" crossorigin="anonymous"></script>
    <?php } ?>
<?php } ?>

<?php if ($_SERVER['REQUEST_URI'] == "/welcome") { ?>
    <script src="<?= $static_url ?>js/welcome.js?<?= time() ?>" crossorigin="anonymous"></script>
<?php } ?>

<!-- for the search only version -->
<?php if ($_SERVER['REQUEST_URI'] == "/" && empty($_SESSION['user_id'])) { ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGueUJAk6CRbaAElLu9N4bbJG-i_D0EHE&callback=initAutocomplete&libraries=places&v=weekly" async></script>
<?php } ?>

<?php if ($_SERVER['REQUEST_URI'] == "/payment") { ?>
    <script src="<?= $static_url ?>js/payment.js?<?= time() ?>" crossorigin="anonymous"></script>
<?php } ?>

<!-- Forgot -->
<?php if ($_SERVER['REQUEST_URI'] == "/forgot-confirm/" . $_GET['token'] . "") { ?>
    <script src="<?= $static_url ?>js/forgot-confirm.js?<?= time() ?>" crossorigin="anonymous"></script>
<?php } ?>

<?php if (!empty($_SESSION['user_id'])) { ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/gestion-profil") { ?>
        <script src="<?= $static_url ?>js/gestion-profil.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/gestion-personnalite" && $premium->get_user() != "0") { ?>
        <script src="<?= $static_url ?>js/gestion-personnalite.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/gestion-desir" && $premium->get_user() != "0") { ?>
        <script src="<?= $static_url ?>js/gestion-desir.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/gestion-photo" && $premium->get_user() != "0") { ?>
        <script src="<?= $static_url ?>js/gestion-photo.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/gestion-abonnement") { ?>
        <script src="<?= $static_url ?>js/gestion-abonnement.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/payment-renewal") { ?>
        <script src="<?= $static_url ?>js/payment-renewal.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/rencontre") { ?>
        <script src="<?= $static_url ?>js/rencontre.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/coup-de-coeur") { ?>
        <script src="<?= $static_url ?>js/coup-de-coeur.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/profil/" . $_GET['id']) { ?>
        <script src="<?= $static_url ?>js/particles.js" crossorigin="anonymous"></script>
        <script src="<?= $static_url ?>js/profil.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

    <?php if($userP['premium'] != 0) { ?>
        <script src="<?= $static_url ?>js/chat-message.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

<?php } else { ?>

    <?php if ($_SERVER['REQUEST_URI'] == "/register") { ?>
        <script src="<?= $static_url ?>js/register.js?<?= time() ?>" crossorigin="anonymous"></script>
    <?php } ?>

<?php } ?>

</body>

</html>