import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>

          <tr>
            <td width="50%">Hamburger</td>
            <td>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}