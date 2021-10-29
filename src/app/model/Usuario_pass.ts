// eslint-disable-next-line @typescript-eslint/naming-convention
export class Usuario_pass {
  public nombreUsuario = '';


  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar la respuesta';
    }
    if (this.nombreUsuario.trim() !== 'Araya') {
      return 'Respuesta incorrecta';
    }
    return '';
  }



  public validarUsuario(): string {
    return this.validarNombreUsuario();
  }
}
