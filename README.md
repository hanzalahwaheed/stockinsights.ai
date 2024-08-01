# StockInsights.ai
## FrontEnd Assignment

### Features
1. Announcements (sorted by date_published)
2. Pagification
3. View Source Documents
4. Filter By:
    - Sentiments
    - Announcement Types
5. Animated Sidebar
6. Dark Mode
7. Responsive (in progress)

### UI/UX Changes
1. Collapsible Navbar
2. Header Dark Mode Toggle Button 
3. Fixed Page Buttons 

### Libraries Used
1. nextJS
2. shadcn
3. tailwind css
4. next-themes

### APIs
#### `POST /api?${query}`
This endpoint fetches the filtered and paginated announcements based on the query parameters.

##### Query Parameters:
- `sentiments`: A comma-separated list of sentiments to filter by (e.g., `positive,negative,neutral`).
- `types`: A comma-separated list of announcement types to filter by.
- `page`: The page number for pagination.

### FlowChart
![flowchart](image.png)

### Local setup
1. git clone `<repo_url>`
2. cd stockinsights.ai
3. npm i
4. add .env.local in root dir
``` NEXT_PUBLIC_NASE_URL=http://localhost:3000 ```
5. npm run dev

### References
1. [Load a Static File into NextJS](https://vercel.com/guides/loading-static-file-nextjs-api-route)

### Author
- [Hanzalah Waheed](https://github.com/hanzalahwaheed)