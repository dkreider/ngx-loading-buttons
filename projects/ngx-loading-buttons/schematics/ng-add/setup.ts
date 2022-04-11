import {chain, Rule } from '@angular-devkit/schematics';
import { getProjectFromWorkspace } from '@angular/cdk/schematics';
import { getProjectTargetOptions } from '@angular/cdk/schematics';
import { updateWorkspace} from '@schematics/angular/utility/workspace';

const themePath = `./node_modules/ngx-loading-buttons/src/styles.css`;

export function cssAdd (options: any): Rule {
  return async () => {
    return chain([
        insertCSSDependency(options.project)
    ]);
  };
}

function insertCSSDependency(project: string): Rule {
    return chain([
      addThemeStyleToTarget(project, 'build', themePath),
      addThemeStyleToTarget(project, 'test', themePath),    
    ]);
}
  
function addThemeStyleToTarget(projectName: string, targetName: 'test' | 'build', assetPath: string): Rule {
    return updateWorkspace(workspace => {
        const project = getProjectFromWorkspace(workspace, projectName);  
        const targetOptions = getProjectTargetOptions(project, targetName);
        const styles = targetOptions['styles'] as (string | {input: string})[];

        const existingStyles = styles.map(s => (typeof s === 'string' ? s : s.input));

        for (let [, stylePath] of existingStyles.entries()) {
            if (stylePath === assetPath)
                return;
        }

        styles.unshift(assetPath);
    });
}