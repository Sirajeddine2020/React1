import React from "react";
import './Header.css';
function Header() {
  return (
<div className="section__header">    
        <div className="container_fluid">
          <div className="header__first">     
          </div>
      
        <div className="header__second">
      
      <div className="language_switcher">
	  <form className="lang_dropdown_form language" id="lang_dropdown_form_language" action="/en/user/login" method="post" accept_charset="UTF_8"><div><div className="form_item form_item_lang_dropdown_select form_type_select form_group"><select className="lang_dropdown_select_element form_control form_control form_select" id="lang_dropdown_select_language" name="lang_dropdown_select" ><option value="en" >English</option><option value="bg">Български</option><option value="de">Deutsch</option> <option value="es">Español</option><option value="fr">Français</option><option value="hr">Hrvatski</option><option value="it">Italiano</option><option value="pt_pt">Português</option><option value="hu">Magyar</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="sk">Slovenčina</option><option value="sl">Slovenščina</option></select></div><input type="hidden" name="bg" value="/bg/user/login" />

<input type="hidden" name="de" value="/de/user/login" />
<input type="hidden" name="en" value="/en/user/login" />
<input type="hidden" name="es" value="/es/user/login" />
<input type="hidden" name="fr" value="/fr/user/login" />
<input type="hidden" name="hr" value="/hr/user/login" />
<input type="hidden" name="it" value="/it/user/login" />
<input type="hidden" name="pt_pt" value="/pt_pt/user/login" />
<input type="hidden" name="hu" value="/hu/user/login" />
<input type="hidden" name="nl" value="/nl/user/login" />
<input type="hidden" name="pl" value="/pl/user/login" />
<input type="hidden" name="sk" value="/sk/user/login" />
<input type="hidden" name="sl" value="/sl/user/login" />

<div>
<button type="submit" id="edit_submit__2" name="op" value="Go" className="btn btn_default form_submit">OK</button>

</div>
<input type="hidden" name="form_build_id" value="form__reference" />
<input type="hidden" name="form_id" value="lang_dropdown_form" />
</div></form>
</div>      
<div className="search_box"><form action="/en/user/login" method="post" id="ejd_search_search_block_custom_form" accept_charset="UTF_8"><div><div className="form_item form_item_title form_type_textfield form_group"> <label className="control_label" for="edit_title"> </label>
<input placeholder="Search by phrase" className="form_control form_text" type="text" id="edit_title" name="title" value="" size="60" maxLength="128" /></div><button className="hidden btn btn_default form_submit" type="submit" id="edit_submit__3" name="op" value="Go">Find</button>
<input type="hidden" name="form_build_id" value="form_reference" />
<input type="hidden" name="form_id" value="ejd_search_search_block_custom_form" />
</div></form></div>    </div>
  </div>
  <div className="broadcast">
  <div className="breadcrumbs"> <a href="/en">Home</a>
          </div>
          <div className="partner_sites">
        <span className="partner_sites__label">Partner sites:</span><a href="https://learn.gomycode.co" className="partner_sites__btn" target="_blank" rel="noopener noreferrer"><span className="icon icon__out"></span><span className="text">GoMyCode</span></a>      </div>       
</div>
</div>

  );
}

export default Header;