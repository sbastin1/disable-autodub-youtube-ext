# Browser Extension to disable auto-dubbing in youtube

### Firefox & Chromium Supported ✅

## 🛠️ Tech Stack

*   **Vite**
    
*   **TypeScript**
    
*   **Vite Web Extension Plugin**
    
*   **pnpm**
    

## 💻 Development Setup

1.  **Clone Repo**
    
2.  **Install Dependencies**
    
    ```
    pnpm i
    ```
    
3.  **Start Dev Server**
    
    ```
    pnpm run dev
    # or
    pnpm run dev:watch
    ```
    

## 📦 Building for Production

Build commands generate output into the **`dist`** folder.

1.  **Chrome Build** 🎨
    
    ```
    pnpm build:chrome
    ```
    
2.  **Firefox Build** 🦊
    
    ```
    pnpm build:firefox
    ```
    

## 🔌 Load Extension for Local Development

Use the **`dist`** folder created by `pnpm run dev`.

### **Google Chrome / Chromium**

1.  Go to: ➡️ `chrome://extensions/`
    
2.  Enable **Developer mode**.
    
3.  Click **"Load Unpacked"**.
    
4.  Select the **`dist`** folder.
    

### **Mozilla Firefox**

1.  Go to: ➡️ `about:debugging#/runtime/this-firefox`
    
2.  Click **"Load Temporary Add-on..."**.
    
3.  Select the **`dist`** folder.
    

## 💿 Final Installation

1.  **Run Build:** `pnpm build:chrome` or `pnpm build:firefox`.
    
2.  **Zip `dist`:** Zip the `dist` folder. **Contents must be at the root of the ZIP.**

3. Add to extensions
