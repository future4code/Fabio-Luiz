import React from "react";

export function Etapa3() {
  return (
    <>
      <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
      <form action="#">
        <ul>
          <li>
            <label>5. Por que você não terminou o curso de graduação?</label>
            <br />
            <input />
          </li>
          <li>
            <label>6. Você fez algum curso complementar?</label>
            <br />
            <select name="cursoComplementar">
              <option value="nenhum">Nenhum</option>
              <option value="cursoTecnico">Curso técnico</option>
              <option value="cursoIngles">Curso de inglês</option>
            </select>
          </li>
        </ul>
      </form>
    </>
  );
}
