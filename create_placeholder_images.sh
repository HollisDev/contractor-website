#!/bin/bash

# Create placeholder images for the contractor website
echo "Creating placeholder images..."

# Create directories
mkdir -p public/services
mkdir -p public/projects
mkdir -p public/testimonials

# Create a simple HTML file to generate placeholder images
cat > create_placeholders.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Generate Placeholder Images</title>
    <style>
        .placeholder {
            width: 800px;
            height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin: 20px;
            background: linear-gradient(135deg, #3b82f6, #10b981);
        }
        
        .kitchen { background: linear-gradient(135deg, #ff6b6b, #ffa726); }
        .bathroom { background: linear-gradient(135deg, #4fc3f7, #29b6f6); }
        .addition { background: linear-gradient(135deg, #ab47bc, #8e24aa); }
        .interior { background: linear-gradient(135deg, #66bb6a, #43a047); }
        .smart-home { background: linear-gradient(135deg, #5c6bc0, #3f51b5); }
        .carpentry { background: linear-gradient(135deg, #8d6e63, #6d4c41); }
    </style>
</head>
<body>
    <div class="placeholder kitchen">LUXURY KITCHEN<br>REMODELING</div>
    <div class="placeholder bathroom">SPA-INSPIRED<br>BATHROOM RENOVATION</div>
    <div class="placeholder addition">SEAMLESS<br>HOME ADDITION</div>
    <div class="placeholder interior">CUSTOM<br>INTERIOR DESIGN</div>
    <div class="placeholder smart-home">SMART HOME<br>INTEGRATION</div>
    <div class="placeholder carpentry">CUSTOM<br>CARPENTRY</div>
</body>
</html>
EOF

echo "Placeholder HTML file created: create_placeholders.html"
echo "Open this file in a browser and take screenshots to create placeholder images."
