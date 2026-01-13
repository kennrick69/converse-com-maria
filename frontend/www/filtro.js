// ========================================
// 🛡️ FILTRO DE PALAVRAS IMPRÓPRIAS v2
// Proteção reforçada para a comunidade
// ========================================

const FiltroPalavras = {
    // Lista de palavras bloqueadas (palavrões em português)
    palavrasBloqueadas: [
        // Palavrões comuns e variações
        'porra', 'porr4', 'p0rra', 'p0rr4',
        'caralho', 'caralh0', 'car4lho', 'krl', 'crl', 'kralho',
        'merda', 'm3rda', 'merd4', 'mrda', 'mierda',
        'bosta', 'b0sta',
        'cagad', 'cagar', 'cagou', 'cagando', 'cago', 'caga',
        'foder', 'fodido', 'fodase', 'foda-se', 'fodasse', 'fudido', 'fudeu', 'fode', 'fod4',
        'puta', 'put4', 'pvta', 'putta', 'putaria', 'puteiro', 'putinha',
        'prostituta', 'vagabunda', 'vadia', 'vadiazinha', 'piranha', 'piranhas',
        'viado', 'viada', 'viad0', 'vi4do', 'bicha', 'bichona', 'bixa', 'bxa',
        'sapatao', 'sapatão', 'sapatona', 'lesbica', 'lésbica',
        'buceta', 'boceta', 'buc3ta', 'bct', 'xoxota', 'xereca', 'ppk', 'perseguida', 'xana', 'rata',
        'pau', 'p4u', 'pica', 'pic4', 'rola', 'r0la', 'cacete', 'pinto', 'pint0', 'piroca', 'pirok',
        'cu ', ' cu', 'cuzao', 'cuzão', 'cuz4o', 'cú', ' cú', 'cú ',
        'arrombado', 'arrombada', 'arrobado', 'arrobada',
        'desgraça', 'desgraçado', 'desgraçada', 'desgracado', 'desgracada',
        'maldito', 'maldita', 'malditos', 'malditas',
        'inferno', 'inf3rno',
        'diabo', 'diabos', 'di4bo',
        'demonio', 'demônio', 'demonios', 'demônios', 'dem0nio',
        'satanas', 'satanás', 'satan', 'sat4nas',
        'imbecil', 'imb3cil', 'imbecis',
        'idiota', 'idi0ta', 'idiotas',
        'retardado', 'retardada', 'ret4rdado', 'retardados',
        'burro', 'burra', 'burros', 'burras',
        'otario', 'otário', 'otaria', 'otária', '0tario', 'otarios',
        'trouxa', 'troxa', 'trouxas',
        'babaca', 'bab4ca', 'babacas',
        'corno', 'corna', 'cornos', 'cornas', 'corn0',
        'chifrudo', 'chifruda',
        'gado', 'gadao', 'gadão',
        'lazarento', 'lazarenta',
        'nojento', 'nojenta', 'noj3nto',
        'lixo', 'lix0',
        'escoria', 'escória', 'escorias',
        'filhodaputa', 'filhadaputa', 'filho da puta', 'filha da puta', 'fdp', 'fdp',
        'pqp', 'vsf', 'tnc', 'pnc', 'vtnc', 'vtc', 'vtnc', 'pnc', 'ksada',
        'fck', 'fuk', 'fuc', 'fvck',
        
        // Ofensas com "cu" específicas
        'cu de', 'de cu', 'no cu', 'teu cu', 'meu cu', 'seu cu', 'pelo cu',
        'enfiar no', 'enfia no',
        
        // Variações criativas comuns
        'kct', 'kcete', 'k7',
        'pqp', 'pq p', 'p q p',
        'vsf', 'v s f', 'vaisefuder', 'vai se fuder', 'vai se foder',
        'tnc', 't n c', 'tomar no', 'tmnc',
        'fdp', 'f d p', 'efedepê',
        
        // Insultos diversos
        'vagabundo', 'vagabunda', 'vgb', 'vagaba',
        'marginal', 'marginais',
        'bandido', 'bandida', 'bandidos',
        'ladrao', 'ladrão', 'ladra', 'ladrões',
        'assassino', 'assassina',
        'estuprador', 'estupradora',
        'pedofilo', 'pedófilo', 'pedofila',
        
        // Drogas
        'maconha', 'mconha', 'beck', 'baseado',
        'cocaina', 'cocaína', 'coca', 'pó',
        'crack', 'crackudo',
        'drogado', 'drogada', 'noiado', 'noiada',
        'cheirar', 'cheira pó',
        
        // Violência
        'matar', 'mat4r', 'matando', 'mato',
        'morrer', 'morra', 'morram',
        'suicid', 'suicida', 'suicidar',
        'enforc', 'enforca',
        
        // Palavras com espaços/símbolos
        'm.e" + "r.d" + "a', 'p.u" + "t.a',
        
        // Xingamentos religiosos
        'herege', 'hereges', 'herético',
        'blasfem', 'blasfêmia',
        'profan', 'profano',
        
        // Homofobia/racismo
        'preto fedido', 'preta fedida', 'pretinho', 'pretinha',
        'macaco', 'macaca',
        'crioulo', 'crioula',
        'traveco', 'traveca',
        
        // Mais variações com números e símbolos
        'c0', '( )u', 'c.u', 'c-u', 'c_u', 'c u',
        'p1r0c4', 'r0l4', 'b0c3t4', 'p1c4',
        '@rrombado', '@rrombada',
        'f0d4', 'f0d3r', 'f0d1d0'
    ],

    // Padrões regex para detectar variações
    padroesBloqueados: [
        /c+\s*u+\s*z*[aã4]+[o0]/gi,  // cuzão e variações
        /c+\W*u+(?:\s|$|\W)/gi,       // cu isolado
        /p+\W*[u0]+\W*t+\W*[a4@]+/gi, // puta e variações
        /m+\W*[e3]+\W*r+\W*d+\W*[a4@]+/gi, // merda e variações
        /c+\W*[a4@]+\W*r+\W*[a4@]+\W*l+\W*h+\W*[o0]+/gi, // caralho
        /f+\W*[o0]+\W*d+\W*[a4@e3]+/gi, // foda/fode
        /b+\W*u+\W*c+\W*[e3]+\W*t+\W*[a4@]+/gi, // buceta
        /p+\W*[i1]+\W*r+\W*[o0]+\W*c+\W*[a4@]+/gi, // piroca
        /v+\W*[i1]+\W*[a4@]+\W*d+\W*[o0]+/gi, // viado
        /a+\W*r+\W*r+\W*o+\W*m+\W*b+\W*a+\W*d+/gi, // arrombad
        /b+\W*[a4@]+\W*b+\W*[a4@]+\W*c+\W*[a4@]+/gi, // babaca
    ],

    // Detectar leetspeak e variações
    normalizarTexto(texto) {
        if (!texto) return '';
        
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/4/g, 'a')
            .replace(/3/g, 'e')
            .replace(/1/g, 'i')
            .replace(/0/g, 'o')
            .replace(/5/g, 's')
            .replace(/7/g, 't')
            .replace(/@/g, 'a')
            .replace(/\$/g, 's')
            .replace(/\+/g, 't')
            .replace(/[._\-*#]/g, '') // Remove separadores comuns
            .replace(/\s+/g, ' ') // Normaliza espaços
            .trim();
    },

    // Verificar se texto contém palavras impróprias
    contemPalavrasImproprias(texto) {
        if (!texto) return false;
        
        const textoOriginal = texto.toLowerCase();
        const textoNormalizado = this.normalizarTexto(texto);
        
        // Verificar palavras bloqueadas
        for (const palavra of this.palavrasBloqueadas) {
            const palavraNorm = this.normalizarTexto(palavra);
            
            // Verificar no texto original e normalizado
            if (textoOriginal.includes(palavra.toLowerCase()) || 
                textoNormalizado.includes(palavraNorm)) {
                console.log('🛡️ Palavra imprópria detectada:', palavra);
                return true;
            }
        }
        
        // Verificar padrões regex
        for (const padrao of this.padroesBloqueados) {
            if (padrao.test(textoOriginal) || padrao.test(textoNormalizado)) {
                console.log('🛡️ Padrão impróprio detectado');
                return true;
            }
        }
        
        // Verificar "cu" como palavra isolada (não dentro de outras palavras)
        const palavras = textoNormalizado.split(/\s+/);
        for (const palavra of palavras) {
            if (palavra === 'cu' || palavra === 'cus') {
                console.log('🛡️ Palavra "cu" isolada detectada');
                return true;
            }
        }
        
        return false;
    },

    // Validar texto (retorna objeto com status e mensagem)
    validar(texto) {
        if (!texto || texto.trim().length === 0) {
            return { valido: false, mensagem: 'Por favor, escreva algo.' };
        }
        
        if (texto.trim().length < 3) {
            return { valido: false, mensagem: 'Texto muito curto.' };
        }
        
        if (texto.length > 500) {
            return { valido: false, mensagem: 'Texto muito longo (máximo 500 caracteres).' };
        }
        
        if (this.contemPalavrasImproprias(texto)) {
            return { 
                valido: false, 
                mensagem: '🙏 Por favor, use palavras respeitosas neste espaço sagrado de oração.' 
            };
        }
        
        return { valido: true };
    },

    // Validar nome (mais restritivo)
    validarNome(nome) {
        if (!nome || nome.trim().length === 0) {
            return { valido: true }; // Nome vazio é ok (será "Anônimo")
        }
        
        if (nome.length > 30) {
            return { valido: false, mensagem: 'Nome muito longo (máximo 30 caracteres).' };
        }
        
        if (this.contemPalavrasImproprias(nome)) {
            return { 
                valido: false, 
                mensagem: '🙏 Por favor, use um nome respeitoso.' 
            };
        }
        
        return { valido: true };
    }
};

window.FiltroPalavras = FiltroPalavras;
