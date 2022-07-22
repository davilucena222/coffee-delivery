import { defaultTheme } from "../styles/theme/default";
import "styled-components";

type ThemeType = typeof defaultTheme;

//sobrescrevendo/adicionando à biblioteca styled-components as cores que foram importadas de default.ts
//todas essas cores agora fazem parte da biblioteca do styled-components e toda a aplicação possui acesso a elas
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}