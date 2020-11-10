export function renderLoading(loading) {
  if (loading)
    document.getElementById("loader").innerHTML =
      '<div class="loader-inner"><div class="loader-inner-content"><img class="loader-inner-icon" src="../assets/images/loader.gif"/></div></div>';
  else document.getElementById("loader").innerHTML = "";
}
