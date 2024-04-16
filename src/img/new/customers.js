const customersImages = Promise.all([
  import("./CATEN8logo_onTrans.png"),
  import("./DenteonENDingLogo_stacked_outlines_blackChrome.png"),
  import("./HV_VIVAdere_CHROME.png"),
  import("./HV_PROCYON_BLUEoriginal.png"),
  import("./HV_PLEXtrac_LogoWithBlackOutline.png"),
  import("./Anonybit.png"),
  import("./SPYDERswooshbat_PurpleBlue_onBlackChrome.png"),
  import("./HEIMDALLdata_vikingfire_chromeOutline2.png"),
  import("./HV_NATsec_unicorn_stickercut_blackChrome.png"),
  import("./HV-bsides-logo-intro.png"),
  import("./DC719jack.png"),
  import("./SAEPiologo_stickercut.png"),
]);

const paths = [];
customersImages.then((data) => {
  data.forEach((img) => paths.push(img.default));
});

export default paths;
