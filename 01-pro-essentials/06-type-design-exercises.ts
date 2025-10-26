// 🥋 06 - Type Design Exercises

// Step 1: create a mutable evolving profile
type UserProfile = {
  id: string;
  username: string;
  email?: string;
};

// Step 2: evolve it — add address, dateJoined, etc.
type ExtendedProfile = UserProfile & {
  address?: string;
  dateJoined: Date;
};

// Step 3: make it immutable
type ImmutableProfile = Readonly<ExtendedProfile>;

// Step 4: generic API response
type ApiResponse<T> = { data: T; version: number };

// 🧠 Drill:
// - Extend ApiResponse with an error field that only exists conditionally
// - Try writing DeepReadonly<T> manually
