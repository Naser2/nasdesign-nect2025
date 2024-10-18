import { createClient } from '@/utils/supabase/client';

// Sync user profile after login

// Function to sync user profile data to Supabase DB after registration
export const syncUserProfile = async (data: any) => {
  const supabase = createClient();
  console.log("SYNCH_USER_CALLED", data.session.user.id);
  
  // Check if a profile already exists
  const { data: profile, error: fetchError } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', data.session.user.id)
    .single();

  console.log("SYNCH_USER_PROFILE_DATA", profile);

  if (fetchError) {
    console.error('SYNCH_USER_PROFILE_Profile fetch error:', fetchError.message);

    if (fetchError.message === 'JSON object requested, multiple (or no) rows returned') {
      console.log('SYNCH_USER_PROFILE_No profile found, creating a new one...');

      // Insert new profile with all available fields from auth.users
      const { error: insertError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: data.session.user.id,
          first_name: data.session.user.user_metadata?.full_name.split()[0],
          last_name: data.session.user.user_metadata?.full_name.split()[1],
          email: data.session.user.user_metadata?.email || data.session.user.email,
          avatar_url: data.session.user.user_metadata?.avatar_url || null,
          phone: data.session.user.phone || null,
        //   display_name: data.session.user.user_metadata?.first_name || data.session.user.raw_user_meta_data.display_name || null,
        //   email_verified: data.session.user.raw_user_meta_data.email_verified || false,
        //   phone_verified: data.session.user.raw_user_meta_data.phone || false,
        //   email_notifications: data.session.user.raw_user_meta_data.email_notifications || true,
        //   provider: data.session.user.app_metadata?.provider || 'email',
          user_role: 'user',  // Default role as 'user', can be changed later
        });

      if (insertError) {
        console.error('Error creating user profile:', insertError.message);
      } else {
        console.log('Profile successfully created for user:', data.session.user.id);
      }
    }
  } else {
    console.log('Profile already exists, updating if necessary...');

    // Update the profile if it exists
    const { error: updateError } = await supabase
      .from('user_profiles')
      .update({
        first_name: data.session.user.user_metadata?.full_name.split()[0],
        last_name: data.session.user.user_metadata?.full_name.split()[1],
        email: data.session.user.user_metadata?.email || data.session.user.email,
        avatar_url: data.session.user.user_metadata?.avatar_url || null,
        phone: data.session.user.phone || data.session.raw_user_meta_data.phone ||  null,
        // display_name:data.session.user.user_metadata?.first_name || data.session.user.raw_user_meta_data.display_name || null,
        // email_verified: data.session.user.raw_user_meta_data.email_verified || false,
        // phone_verified: data.session.user.raw_user_meta_data.phone || false,
        // email_notifications: data.session.user.raw_user_meta_data.email_notifications || true,
        // provider: data.session.user.app_metadata?.provider || 'email',
        // user_role: 'user',  // Default role as 'user', can be changed later
      })
      .eq('user_id', data.session.user.id);

    if (updateError) {
      console.error('Error updating user profile:', updateError.message);
    } else {
      console.log('Profile successfully updated for user:', data.session.user.id);
    }
  }
};

  
  
// // Function to sync user profile data to Supabase DB after registration
// export const syncUserProfile = async (user: any) => {
//   const supabase = createClient();

//   // Fetch user profile based on user ID
//   const { data: profile, error } = await supabase
//     .from('user_profiles')
//     .select('*')
//     .eq('user_id', user.id)
//     .single();

//   if (!profile && !error) {
//     // Create new profile if it doesn't exist
//     const { error: insertError } = await supabase
//       .from('user_profiles')
//       .insert({
//         user_id: user.id,
//         email: user.email,
//         display_name: user.user_metadata?.first_name || user.user_metadata?.last_name || user.email,
//         user_role: 'user', // Default to 'user', can be changed later
//       });

//     if (insertError) {
//       console.error('Error creating user profile:', insertError.message);
//     }
//   } else if (profile && !error) {
//     // If profile exists, update it if necessary
//     const { error: updateError } = await supabase
//       .from('user_profiles')
//       .update({
//         display_name: user.user_metadata?.first_name || user.user_metadata?.last_name || user.email,
//       })
//       .eq('user_id', user.id);

//     if (updateError) {
//       console.error('Error updating user profile:', updateError.message);
//     }
//   }
// };

// Function to handle user sign-up with Google
// export const handleGoogleAuth = async () => {
//   const supabase = createClient();

//   const { error, session } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//   });

//   if (error) {
//     console.error('Google login failed:', error.message);
//     return { error };
//   }

//   if (session) {
//     // Sync the user profile after Google login
//     await syncUserProfile(session.user);
//   }

//   return { session };
// };
