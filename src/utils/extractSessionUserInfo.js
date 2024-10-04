// utils/extractSessionUserInfo.js

export function extractSessionUserInfo(session) {
  if (!session || !session.user) {
    return null;
  }

  // Extract session-level attributes
  const accessToken = session.access_token;
  const tokenType = session.token_type;
  const expiresIn = session.expires_in;
  const expiresAt = session.expires_at;
  const refreshToken = session.refresh_token;

  // Extract user-level attributes
  const user = session.user;
  const userId = user.id;
  const aud = user.aud;
  const role = user.role;
  const email = user.email;
  const emailConfirmedAt = user.email_confirmed_at;
  const confirmedAt = user.confirmed_at;
  const lastSignInAt = user.last_sign_in_at;
  const createdAt = user.created_at;
  const updatedAt = user.updated_at;
  const isAnonymous = user.is_anonymous;

  // Extract app_metadata
  const appMetadata = user.app_metadata; // Contains provider and providers array

  // Extract user_metadata
  const userMetadata = user.user_metadata || {};
  const firstName = userMetadata.first_name || '';
  const lastName = userMetadata.last_name || '';
  const license = userMetadata.license || '';
  const phoneVerified = userMetadata.phone_verified || false;
  const emailVerified = userMetadata.email_verified || false;
  const sub = userMetadata.sub || '';
  const userRole = userMetadata.userRole || '';
  const userMetaRole = userMetadata.role || '';

  // Extract identities and related data
  const identities = user.identities || [];
  const identityData = identities[0]?.identity_data || {}; // Get the first identity data

  // Extract phone from both user and identity data
  const phone = identityData.phone || user.phone || ''; // Prioritize identity data

  // Return an object containing all extracted data
  return {
    // Session-level data
    accessToken,
    tokenType,
    expiresIn,
    expiresAt,
    refreshToken,

    // User-level data
    userId,
    aud,
    role,
    email,
    emailConfirmedAt,
    phone, // Use phone from identity or user
    confirmedAt,
    lastSignInAt,
    createdAt,
    updatedAt,
    isAnonymous,

    // Metadata
    appMetadata,
    userMetadata: {
      firstName,
      lastName,
      license,
      phoneVerified,
      emailVerified,
      sub,
      userRole,
      role: userMetaRole,
    },

    // Identities
    identities,
  };
}
