/*
  Account adapter. This file deliberately does not store passwords in the browser.
  To activate real accounts and cross-device storage, configure Supabase in
  config.js and provide the SQL schema in SUPABASE_SETUP.md.
*/
window.QuoteMakerAuth={
  enabled:false,
  user:null,
  async open(){
    alert('Gli account cloud non sono ancora collegati. Per attivarli, configura Supabase seguendo SUPABASE_SETUP.md. I dati restano locali finché non viene completata questa configurazione.');
  }
};
