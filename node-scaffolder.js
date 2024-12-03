#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

class ReactNativeFolderScaffolder {
    constructor(rootPath = process.cwd()) {
        this.rootPath = rootPath;
    }

    createDirectories() {
        const directories = [
            'src/assets/banner',
            'src/assets/fonts',
            'src/assets/icons/BottomTabIcons',
            'src/assets/icons/png',
            'src/assets/images/LanguageSelect',
            'src/assets/images/SvgImages',
            'src/components/BottomSheet',
            'src/components/carousel',
            'src/components/global',
            'src/constants',
            'src/features/auth',
            'src/features/landlord/LocalComponent',
            'src/features/renter/LocalComponent',
            'src/i18n/locales',
            'src/navigation',
            'src/service',
            'src/state',
            'src/styles',
            'src/theme',
            'src/types',
            'src/utils'
        ];

        directories.forEach(dir => {
            fs.mkdirpSync(path.join(this.rootPath, dir));
            console.log(`Created directory: ${dir}`);
        });
    }

    createTsConfig() {
        const tsConfigPath = path.join(this.rootPath, 'tsconfig.json');
        const defaultConfig = {
            extends: "@react-native/typescript-config/tsconfig.json",
            compilerOptions: {
                typeRoots: ["node_modules/@types", "src/types"],
                types: ["jest"],
                baseUrl: "./src",
                paths: {
                    "@assets/*": ["assets/*"],
                    "@features/*": ["features/*"],
                    "@service/*": ["service/*"],
                    "@navigation/*": ["navigation/*"],
                    "@components/*": ["components/*"],
                    "@state/*": ["state/*"],
                    "@styles/*": ["styles/*"],
                    "@utils/*": ["utils/*"],
                    "@i18n/*": ["i18n/*"],
                    "@theme/*": ["theme/*"],
                    "@constants/*": ["constants/*"]
                }
            }
        };

        fs.writeJsonSync(tsConfigPath, defaultConfig, { spaces: 2 });
        console.log('Created/Updated tsconfig.json');
    }

    createUtilityFiles() {
        const utilFiles = [
            'src/utils/MediaHandler.ts',
            'src/utils/responsive-screen.ts',
            'src/utils/storage.ts'
        ];

        utilFiles.forEach(file => {
            const fullPath = path.join(this.rootPath, file);
            fs.writeFileSync(fullPath, '// Utility file placeholder');
            console.log(`Created utility file: ${file}`);
        });
    }

    scaffold() {
        console.log('🚀 React Native Folder Structure Scaffolder');
        this.createDirectories();
        this.createTsConfig();
        this.createUtilityFiles();
        console.log('✅ Folder structure created successfully!');
    }
}

// Main execution
const scaffolder = new ReactNativeFolderScaffolder();
scaffolder.scaffold();
