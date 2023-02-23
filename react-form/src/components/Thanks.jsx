import React from 'react';
import "./Thanks.css";

import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill} from "react-icons/bs";

const Thanks = ({data}) => {
    return ( 
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
            <p>Para concluir sua avaliação clique no botão de enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação:
                <p className='review-data'>
                    <span>Satisfação com o produto:</span>
                </p>
                <p className="review-data">
                    <span>Comentário:</span>
                </p>
            </h3>
        </div>
     );
}
 
export default Thanks;