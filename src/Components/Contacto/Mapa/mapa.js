import React from 'react';
import "../Mapa/mapa.css";

 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div id = "mapa" className="embed-responsive embed-responsive-4by3">
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.15309576441!2d-65.29263395675282!3d-26.832841656760422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1607526462159!5m2!1ses-419!2sar"></iframe>
            
        </div>
 
    )
    
  }
 
}
 
export default Mapa;