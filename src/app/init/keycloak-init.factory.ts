import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8089' + '/auth',
          realm: 'MFA2Demo',
          clientId: 'keycloak-app',
        }
      });
}
