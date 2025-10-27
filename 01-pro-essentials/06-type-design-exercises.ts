// 🥋 06 - Type Design Exercises

// Step 1: create a mutable evolving profile
type UserProfile = {
  id: string;
  username: string;
  email?: string;
};

interface IUserProfile {
  id: string;
  username: string;
  email?: string;
}

// Step 2: evolve it — add address, dateJoined, etc.
type ExtendedProfile = UserProfile & {
  address?: string;
  dateJoined: Date;
};

interface IExtendedProfile extends IUserProfile {
  address?: string;
  dateJoined: Date;
}

// Step 3: make it immutable
type ImmutableProfile = Readonly<ExtendedProfile>;

interface IImmutableProfile extends Readonly<IExtendedProfile> {}

// Step 4: generic API response
type ApiResponse<T> = { data: T; version: number };
interface IApiResponse<T> {
  data: T;
  version: number;
}

// 🧠 Drill:
// - Extend ApiResponse with an error field that only exists conditionally
// - Try writing DeepReadonly<T> manually

type ErrorApiResponse<T> =
  | { data: T; version: number; error?: undefined }
  | { data?: undefined; version: number; error: { message: string } };

// type ConditionalApiResponse<T, HasError extends boolean = false> =
//   HasError extends true
//     ? ApiResponse<T> & { error: { message: string } }
//     : ApiResponse<T>;

type DeepReadonly<T> = {
  data: T;
} & ApiResponse<T>;

// type DeepReadonly<T> = {
//   readonly [K in keyof T]:
//     T[K] extends object
//       ? DeepReadonly<T[K]>
//       : T[K];
// };
