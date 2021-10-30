/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/naming-convention */
export class Sesion {
  public User_name: string;
  public Password: number;
  public Password2: number;
public segundo_apellido_materno: string;
public active = 1;



  public validarNombreUsuario(): string {
    if (this.User_name.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }

  }

  public validarPassword(): string {
    if (this.User_name.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña';
    }
    if(this.Password2 !== this.Password){
      return 'Las claves deben ser iguales';
    }
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
