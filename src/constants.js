/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const PRE_UA = 0x1;
export const ON_UA = 0x2;
export const ONCE = 0x4;

export const OPERATIONS = {
  OP_CUSTOM_JS: 0,
  OP_INSERT_BEFORE: 1,
  OP_INSERT_AFTER: 2,
  OP_PREPEND: 3,
  OP_APPEND: 4,
  OP_REPLACE: 5,
  OP_SET_INNERHTML: 6,
  OP_REMOVE: 7,
  OP_SET_ATTRIBUTE: 8,
  OP_REDIRECT: 9
};