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

### 1. Build the Project

-  **Chromium Build** 🎨
    
    ```
    pnpm build:chrome
    ```
    
-  **Firefox Build** 🦊
    
    ```
    pnpm build:firefox
    ```

- **Zip the `dist` folder if you wish to load the addon on firefox or deploy it**

    ```
    zip -r extension.zip dist/
    ```

## 🔌 Load Extension

### **Google Chrome / Chromium**

1.  Go to: ➡️ `chrome://extensions/`
    
2.  Enable **Developer mode**.
    
3.  Click **"Load Unpacked"**.
    
4.  Select the generated **`dist`** folder.
    

### **Mozilla Firefox**

1.  Go to: ➡️ `about:debugging#/runtime/this-firefox`
    
2.  Click **"Load Temporary Add-on..."**.
    
3.  Select the **`extension.zip`** file.

#### OR

1.  Go to: ➡️ `about:addons`
    
2.  Click **"Install Add-on from file"**.
    
3.  Select the **`extension.zip`** file.

