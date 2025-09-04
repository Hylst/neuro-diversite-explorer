# Supabase Storage Setup Instructions

## Issue Resolution: Storage Bucket Creation Error

If you encounter the error `StorageApiError: new row violates row-level security policy` when trying to create the 'avatars' bucket, this is because the application client doesn't have the necessary permissions to create storage buckets automatically.

## Manual Storage Bucket Creation

To resolve this issue, you need to manually create the storage bucket in your Supabase dashboard:

### Step 1: Access Supabase Dashboard
1. Go to [https://app.supabase.io](https://app.supabase.io)
2. Sign in to your account
3. Select your project: `neurodiversity-explorer`

### Step 2: Navigate to Storage
1. In the left sidebar, click on **"Storage"**
2. You'll see the storage buckets management interface

### Step 3: Create the 'avatars' Bucket
1. Click the **"New bucket"** button
2. Fill in the bucket details:
   - **Name**: `avatars`
   - **Public bucket**: ✅ **Enabled** (check this box)
   - **File size limit**: `2 MB` (2097152 bytes)
   - **Allowed MIME types**: 
     - `image/jpeg`
     - `image/png` 
     - `image/gif`

### Step 4: Configure Bucket Policies (Optional)
The bucket should work with default policies, but if you need custom policies:

1. Go to **Storage** > **Policies**
2. Create policies for the `avatars` bucket as needed

### Step 5: Verify Setup
After creating the bucket:
1. Restart your development server: `npm run dev`
2. Check the browser console - you should see: `"Bucket 'avatars' disponible"`
3. The storage error should no longer appear

## Alternative: Using Base64 Storage

If you prefer not to use Supabase storage, the application also supports storing avatars as base64 strings directly in the database:

- User avatars are stored in the `profiles.avatar_base64` column
- This method doesn't require storage buckets
- Images are automatically converted to base64 when uploaded

## Troubleshooting

### Error: "Bucket already exists"
If you see this error, the bucket was already created. Check the Storage section in your dashboard.

### Error: "Insufficient permissions"
Make sure you're logged in as the project owner or have storage management permissions.

### Error: "Invalid MIME type"
Ensure you've added the correct MIME types: `image/jpeg`, `image/png`, `image/gif`

## Technical Details

The application now uses a read-only approach to check storage availability:
- `checkSupabaseStorage()` function verifies bucket existence
- No automatic bucket creation to avoid RLS policy violations
- Graceful fallback to base64 storage if buckets aren't available

## Files Modified

- `src/integrations/supabase/client.ts`: Removed automatic bucket creation
- Storage initialization now only checks for bucket availability
- Added proper error handling and user-friendly warnings

For any issues, please refer to the [Supabase Storage Documentation](https://supabase.com/docs/guides/storage) or contact the development team.